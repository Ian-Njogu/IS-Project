from rest_framework import viewsets
from django.contrib.auth import get_user_model
from .serializers import UserSerializer
from .permissions import IsSystemAdministrator

User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsSystemAdministrator] 

    def get_queryset(self):
        user = self.request.user
        if user.hospital:
            return User.objects.filter(hospital=user.hospital)
        return User.objects.all()
