# api/backends.py

#다중 모델을 하나로 쓰는 방법

from django.contrib.auth.backends import ModelBackend
from .models import RegularUser, BusinessUser

class CustomUserBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = RegularUser.objects.get(username=username)
        except RegularUser.DoesNotExist:
            try:
                user = BusinessUser.objects.get(username=username)
            except BusinessUser.DoesNotExist:
                return None

        if user.check_password(password):
            return user
        return None
