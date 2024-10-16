# api/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password


class RegularUser(AbstractUser): # 일반 사용자 모델
    name = models.CharField(max_length=100)
    birthdate = models.DateField(null=True, blank=True)
    region = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)



class BusinessUser(models.Model):
    company_name = models.CharField(max_length=255)
    business_number = models.CharField(max_length=20, unique=True)
    username = models.CharField(max_length=150, unique=True)  # 아이디
    password = models.CharField(max_length=128)  # 비밀번호
    region = models.CharField(max_length=100)

    def set_password(self, raw_password):
        # 비밀번호 해시화 처리
        self.password = make_password(raw_password)