# password_recovery/views.py
from django.shortcuts import render
from django.http import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from api.models import RegularUser, BusinessUser  # RegularUser와 BusinessUser 모델 임포트

# password_recovery/views.py
def recover_regular_username(request):
    if request.method == 'POST':
        email = request.POST.get('email')  # 일반 사용자의 경우 이메일로 아이디 찾기
        try:
            user = RegularUser.objects.get(email=email)
            return JsonResponse({'username': user.username, 'message': '아이디를 찾았습니다.'})
        except ObjectDoesNotExist:
            return JsonResponse({'message': '해당 이메일로 등록된 사용자가 없습니다.'}, status=404)

    return JsonResponse({'message': '잘못된 요청입니다.'}, status=400)

def reset_regular_password(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = RegularUser.objects.get(username=username)
            if user.check_password(password):
                # 비밀번호 초기화 로직 구현
                return JsonResponse({'message': '비밀번호가 초기화되었습니다.'})
            else:
                return JsonResponse({'message': '잘못된 비밀번호입니다.'}, status=400)
        except ObjectDoesNotExist:
            return JsonResponse({'message': '해당 아이디의 사용자가 없습니다.'}, status=404)

    return JsonResponse({'message': '잘못된 요청입니다.'}, status=400)

def recover_business_username(request):
    if request.method == 'POST':
        business_number = request.POST.get('business_number')  # 사업자 번호를 통해 아이디 찾기
        try:
            user = BusinessUser.objects.get(business_number=business_number)
            return JsonResponse({'username': user.username, 'message': '아이디를 찾았습니다.'})
        except ObjectDoesNotExist:
            return JsonResponse({'message': '해당 사업자 번호로 등록된 사용자가 없습니다.'}, status=404)

    return JsonResponse({'message': '잘못된 요청입니다.'}, status=400)

def reset_business_password(request):
    if request.method == 'POST':
        business_number = request.POST.get('business_number')
        username = request.POST.get('username')
        password = request.POST.get('password')
        try:
            user = BusinessUser.objects.get(business_number=business_number, username=username)
            # 비밀번호 초기화 로직 구현
            return JsonResponse({'message': '비밀번호가 초기화되었습니다.'})
        except ObjectDoesNotExist:
            return JsonResponse({'message': '해당 사업자 번호 또는 아이디의 사용자가 없습니다.'}, status=404)

    return JsonResponse({'message': '잘못된 요청입니다.'}, status=400)
