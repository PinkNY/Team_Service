from django.shortcuts import render

# Create your views here.
# api/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import UserProfile, CompanyProfile
from django.contrib.auth.hashers import make_password, check_password
import json

@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        user_id = data.get('user_id')
        password = data.get('password')
        password_confirm = data.get('password_confirm')
        gender = data.get('gender')
        
        if gender not in ['male', 'female']:
            return JsonResponse({'error': 'Invalide gender value'}, status=400)
        
        birth_date = data.get('birth_date')
        region = data.get('region')
        
        if password != password_confirm:
            return JsonResponse({'error': 'Password do not match'}, status=400)
        
        if UserProfile.objects.filter(username=username).exists() or UserProfile.objects.filter(user_id=user_id).exists():
            return JsonResponse({'error': 'Username or email already exists'}, status=400)
        
        hashed_password = make_password(password)
        user = UserProfile(username=username, user_id=user_id, password=hashed_password, gender=gender, birth_date=birth_date, region=region)
        user.save(using='user_db')
        return JsonResponse({'message': 'User registered successfully'}, status=201)
    
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def user_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        user_id = data.get('user_id')
        password = data.get('password')

        try:
            user = UserProfile.objects.using('user_db').get(user_id=user_id)
            if check_password(password, user.password):
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'error': 'Invalid password'}, status=400)
        except UserProfile.DoesNotExist:
            return JsonResponse({'error': 'User does not exist'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def company_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        business_number = data.get('business_number')
        business_user_id = data.get('business_user_id')
        password = data.get('password')
        region = data.get('region')
        
        if CompanyProfile.objects.filter(business_number=business_number).exists() or CompanyProfile.objects.filter(ubusiness_user_id=business_user_id).exists():
            return JsonResponse({'error': 'Business number or email already exists'}, status=400)
        
        hashed_password = make_password(password)
        company = CompanyProfile(business_number=business_number, business_user_id=business_user_id, password=hashed_password, region=region)
        company.save(using='company_db')
        return JsonResponse({'message': 'Company registered successfully'}, status=201)
    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def company_login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        business_user_id = data.get('business_user_id')
        password = data.get('password')

        try:
            company = CompanyProfile.objects.using('company_db').get(business_user_id=business_user_id)
            if check_password(password, company.password):
                return JsonResponse({'message': 'Login successful'}, status=200)
            else:
                return JsonResponse({'error': 'Invalid password'}, status=400)
        except CompanyProfile.DoesNotExist:
            return JsonResponse({'error': 'Company does not exist'}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)