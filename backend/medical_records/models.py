from django.db import models
from core.models import TimeStampedModel
from patients.models import Patient
from django.conf import settings

class MedicalRecord(TimeStampedModel):
    record_id = models.AutoField(primary_key=True)
    patient = models.ForeignKey(
        Patient, 
        on_delete=models.CASCADE, 
        related_name='medical_records'
    )
    lab_results = models.JSONField(help_text="Flexible schema for multiple test types")
    test_date = models.DateField()
    verified_status = models.BooleanField(default=False)
    verified_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        null=True, 
        blank=True, 
        on_delete=models.SET_NULL,
        help_text="The Healthcare Professional who verified this record"
    )

    def __str__(self):
        return f"Record {self.record_id} for Patient {self.patient.patient_id}"
