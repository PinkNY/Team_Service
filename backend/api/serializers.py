from rest_framework import serializers
from .models import RegularUser, BusinessUser

class RegularUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegularUser
        fields = ['username', 'name', 'password', 'birthdate', 'region', 'gender']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = RegularUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class BusinessUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusinessUser
        fields = ['username', 'company_name', 'business_number', 'password', 'region']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = BusinessUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    
from rest_framework import serializers

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
