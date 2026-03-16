from rest_framework import viewsets
from .models import Patient, Donor, Recipient
from .serializers import PatientSerializer, DonorSerializer, RecipientSerializer
from rest_framework.permissions import IsAuthenticated

class PatientViewSet(viewsets.ModelViewSet):
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.request.user.hospital:
            return Patient.objects.filter(hospital=self.request.user.hospital)
        return Patient.objects.all()

    def perform_create(self, serializer):
        serializer.save(hospital=self.request.user.hospital)

class DonorViewSet(viewsets.ModelViewSet):
    serializer_class = DonorSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.request.user.hospital:
            return Donor.objects.filter(donor_id__hospital=self.request.user.hospital)
        return Donor.objects.all()

class RecipientViewSet(viewsets.ModelViewSet):
    serializer_class = RecipientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        if self.request.user.hospital:
            return Recipient.objects.filter(recipient_id__hospital=self.request.user.hospital)
        return Recipient.objects.all()
