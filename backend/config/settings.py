"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 5.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.1/ref/settings/
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure--3m5ujzym14++^e#u_3q^j2cln4^0cze9guf3_)ssg^#sz=cq-'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = [
    'corsheaders',
    'rest_framework',
    'api',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

# 로그인 후 리디렉션할 URL
LOGIN_REDIRECT_URL = '/'

# 로그아웃 후 리디렉션할 URL
LOGOUT_REDIRECT_URL = '/'

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3001",  # React 앱이 실행되는 주소
    "http://127.0.0.1:8000",
]

MIDDLEWARE = [
     'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
AUTH_USER_MODEL = 'api.RegularUser'

WSGI_APPLICATION = 'config.wsgi.application'

import os

if os.getenv('ENVIRONMENT') == 'PRODUCTION':
    # 배포 환경일 때 기본 데이터베이스를 Azure로 설정
    DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'default_festa',  # Azure에 있는 DB 이름
        'USER': 'skdudgns@teamdatabase',  # 사용자명@서버명
        'PASSWORD': '9P@ssw0rd',  # MySQL 비밀번호
        'HOST': 'teamdatabase.mysql.database.azure.com',  # Azure MySQL 호스트
        'PORT': '3306',
    },
    'user_db': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'user_db',
        'USER': 'skdudgns@teamdatabase',
        'PASSWORD': '9P@ssw0rd',
        'HOST': 'teamdatabase.mysql.database.azure.com',
        'PORT': '3306',
    },
    'company_db': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'company_db',
        'USER': 'skdudgns@teamdatabase',
        'PASSWORD': '9P@ssw0rd',
        'HOST': 'teamdatabase.mysql.database.azure.com',
        'PORT': '3306',
    },
    'festival': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'festival',
        'USER': 'skdudgns@teamdatabase',
        'PASSWORD': '9P@ssw0rd',
        'HOST': 'teamdatabase.mysql.database.azure.com',
        'PORT': '3306',
    }
}
else:
    # 개발 환경일 때 기본 데이터베이스를 개발 서버로 설정
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'default_festa',  # 개발 서버에 있는 DB 이름
            'USER': 'root',
            'PASSWORD': '1234',
            'HOST': 'localhost',  # 개발 서버 IP 주소
            'PORT': '3306',
        },
        'user_db': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'user_db',
            'USER': 'root',
            'PASSWORD': '1234',
            'HOST': 'localhost',
            'PORT': '3306',
        },
        'company_db': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'company_db',
            'USER': 'root',
            'PASSWORD': '1234',
            'HOST': 'localhost',
            'PORT': '3306',
        },
        'festival': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'festival',
            'USER': 'root',
            'PASSWORD': '1234',
            'HOST': 'localhost',
            'PORT': '3306',
        }
    }


DATABASE_ROUTERS = ['backend.routers.db_router.DevAzureRouter']



# Password validation
# https://docs.djangoproject.com/en/5.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.1/howto/static-files/
import os
STATIC_URL = 'static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static/')


# Default primary key field type
# https://docs.djangoproject.com/en/5.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTHENTICATION_BACKENDS = (
    'api.backends.CustomUserBackend',
    'django.contrib.auth.backends.ModelBackend',  # Django 기본 백엔드도 추가
)



# REST_FRAMEWORK = { #JWT 인증을 사용하기 위한 설정
#     'DEFAULT_AUTHENTICATION_CLASSES': (
#         'rest_framework_simplejwt.authentication.JWTAuthentication',
#     ),
# }
