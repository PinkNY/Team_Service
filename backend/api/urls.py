from django.urls import path
from .views import RegularUserCreate, BusinessUserCreate, UserLogin #RegularUserLogin, BusinessUserLogin



urlpatterns = [
    path('signup/user/', RegularUserCreate.as_view(), name='regular_user_create'),  # 일반 사용자 회원가입
    path('signup/business/', BusinessUserCreate.as_view(), name='business_user_create'),  # 사업자 회원가입
    path('login/user/', UserLogin.as_view(), name='user_login'),
]