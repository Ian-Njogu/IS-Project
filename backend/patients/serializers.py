from rest_framework import serializers
from .models import Patient, Donor, Recipient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        read_only_fields = ['hospital'] 

class DonorSerializer(serializers.ModelSerializer):
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), source='donor_id'
    )
    
    class Meta:
        model = Donor
        fields = ['patient_id', 'consent_status', 'availability']

class RecipientSerializer(serializers.ModelSerializer):
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all(), source='recipient_id'
    )
    
    class Meta:
        model = Recipient
        fields = ['patient_id', 'waiting_list_status']
