from django.urls import path
from .views import RegularUserCreate, BusinessUserCreate, RegularUserLogin, BusinessUserLogin



urlpatterns = [
    path('signup/user/', RegularUserCreate.as_view(), name='regular_user_create'),  # 일반 사용자 회원가입
    path('signup/business/', BusinessUserCreate.as_view(), name='business_user_create'),  # 사업자 회원가입
    path('login/user/', RegularUserLogin.as_view(), name='regular_user_login'),
    path('login/business/', BusinessUserLogin.as_view(), name='business_user_login'),
]