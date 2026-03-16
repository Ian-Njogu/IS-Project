from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Match
from patients.models import Recipient
from .serializers import MatchSerializer
from accounts.permissions import IsTransplantCoordinator
from .services import OrganMatchingService

class MatchViewSet(viewsets.ModelViewSet):
    serializer_class = MatchSerializer
    permission_classes = [IsTransplantCoordinator]

    def get_queryset(self):
        if self.request.user.hospital:
            return Match.objects.filter(recipient__recipient_id__hospital=self.request.user.hospital)
        return Match.objects.all()

    @action(detail=False, methods=['post'])
    def run(self, request):
        recipient_id = request.data.get('recipient_id')
        try:
            recipient = Recipient.objects.get(recipient_id__patient_id=recipient_id)
        except Recipient.DoesNotExist:
            return Response({'error': 'Recipient not found.'}, status=status.HTTP_404_NOT_FOUND)
        
        matches = OrganMatchingService.get_compatible_donors(recipient)
        serializer = self.get_serializer(matches, many=True)
        return Response(serializer.data)
