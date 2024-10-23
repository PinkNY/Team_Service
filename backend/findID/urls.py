# password_recovery/urls.py
from django.urls import path
from .views import (
    recover_regular_username,
    reset_regular_password,
    recover_business_username,
    reset_business_password,
)

urlpatterns = [
    path('findID/user/', recover_regular_username, name='recover_regular_username'),
    path('reset/user/', reset_regular_password, name='reset_regular_password'),
    path('findID/business/', recover_business_username, name='recover_business_username'),
    path('reset/business/', reset_business_password, name='reset_business_password'),
]