from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from accounts.permissions import IsSystemAdministrator
from patients.models import Donor, Recipient
from matching.models import Match

class SystemReportViewSet(viewsets.ViewSet):
    permission_classes = [IsSystemAdministrator]

    @action(detail=False, methods=['get'])
    def operations(self, request):
        total_donors = Donor.objects.count()
        total_recipients = Recipient.objects.count()
        successful_matches = Match.objects.filter(match_status='COMPLETED').count()
        
        return Response({
            'total_donors': total_donors,
            'total_recipients': total_recipients,
            'successful_matches': successful_matches
        })
