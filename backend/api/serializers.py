from rest_framework import serializers
from .models import RegularUser, BusinessUser
from rest_framework import status
from rest_framework import serializers
from django.contrib.auth import authenticate

class RegularUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegularUser
        fields = ['username', 'name', 'password','email' ,'birth_date', 'location', 'gender']
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
        fields = ['username', 'company_name', 'business_number', 'password', 'location']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = BusinessUser(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
    


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

    def validate(self, attrs):
        username = attrs.get('username')
        password = attrs.get('password')
        
        # BusinessUser 모델로 로그인 인증
        user = authenticate(username=username, password=password)

        if user is None:
            raise serializers.ValidationError("잘못된 아이디 또는 비밀번호")
        
        attrs['user'] = user
        return attrs
