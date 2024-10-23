# api/models.py

from django.db import models
from django.contrib.auth.models import AbstractUser


class RegularUser(AbstractUser):  # 일반 사용자 모델
    name = models.CharField(max_length=100)
    birth_date = models.DateField(null=True, blank=True)
    location = models.CharField(max_length=100)
    # 성별 선택지
    gender = models.CharField(
        max_length=2,
        choices=[
            ('남자', '남자'),
            ('여자', '여자')
        ],
        default='M'
    )

    # groups 필드에 related_name 추가
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='regularuser_set',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.'
    )

    # user_permissions 필드에 related_name 추가
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='regularuser_set',
        blank=True,
        help_text='Specific permissions for this user.'
    )


class BusinessUser(AbstractUser):  # 사업자 사용자 모델
    company_name = models.CharField(max_length=255)
    business_number = models.CharField(max_length=20, unique=True)
    location = models.CharField(max_length=100)

    # groups 필드에 related_name 추가
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='businessuser_set',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.'
    )

    # user_permissions 필드에 related_name 추가
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='businessuser_set',
        blank=True,
        help_text='Specific permissions for this user.'
    )