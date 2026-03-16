from .models import Match
from patients.models import Donor, Recipient

class OrganMatchingService:
    @staticmethod
    def get_compatible_donors(recipient: Recipient):
        from medical_records.models import MedicalRecord
        
        donors = Donor.objects.filter(
            availability=True, 
            consent_status=True,
            donor_id__organ_type=recipient.recipient_id.organ_type,
            donor_id__blood_type=recipient.recipient_id.blood_type,
            donor_id__hospital=recipient.recipient_id.hospital
        )

        matches = []
        for donor in donors:
            # Need verified medical records
            if MedicalRecord.objects.filter(patient=donor.donor_id, verified_status=True).exists():
                score = 85.0 # Basic compatibility calculation
                matches.append(Match(
                    donor=donor, 
                    recipient=recipient, 
                    compatibility_score=score, 
                    match_status='PENDING'
                ))
        
        if matches:
            Match.objects.bulk_create(matches)
        
        return Match.objects.filter(recipient=recipient).order_by('-compatibility_score')
