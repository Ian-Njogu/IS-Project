from rest_framework import serializers
from .models import Match

class MatchSerializer(serializers.ModelSerializer):
    donor_name = serializers.CharField(source='donor.donor_id.name', read_only=True)
    recipient_name = serializers.CharField(source='recipient.recipient_id.name', read_only=True)
    
    class Meta:
        model = Match
        fields = ['match_id', 'donor', 'donor_name', 'recipient', 'recipient_name', 'compatibility_score', 'match_status', 'match_date']
