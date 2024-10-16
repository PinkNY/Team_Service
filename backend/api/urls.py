from django.urls import path
from . import views

urlpatterns = [
    path('user/signup/', views.user_signup, name='user_signup'),
    path('user/login/', views.user_login, name='user_login'),
    path('company/signup/', views.company_signup, name='company_signup'),
    path('company/login/', views.company_login, name='company_login'),
]