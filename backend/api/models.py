# api/models.py

from django.db import models

class  UserProfile(models.Model):
    username = models.CharField(max_length=255, unique=True)
    user_id = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    gender = models.CharField(max_length=50)
    birth_date = models.DateField()
    region = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.username
    
class CompanyProfile(models.Model):
    business_number = models.CharField(max_length=20, unique=True)
    business_user_id = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255, unique=True)
    region = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.business_number