"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from accounts.views import UserViewSet
from hospitals.views import HospitalViewSet
from patients.views import PatientViewSet, DonorViewSet, RecipientViewSet
from medical_records.views import MedicalRecordViewSet
from matching.views import MatchViewSet
from interoperability.views import ExternalExchangeLogViewSet
from reports.views import SystemReportViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='users')
router.register(r'hospitals', HospitalViewSet, basename='hospitals')
router.register(r'patients', PatientViewSet, basename='patients')
router.register(r'donors', DonorViewSet, basename='donors')
router.register(r'recipients', RecipientViewSet, basename='recipients')
router.register(r'medical-records', MedicalRecordViewSet, basename='medical-records')
router.register(r'matching', MatchViewSet, basename='matching')
router.register(r'exchanges', ExternalExchangeLogViewSet, basename='exchanges')
router.register(r'reports', SystemReportViewSet, basename='reports')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/v1/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/v1/', include(router.urls)),
]
