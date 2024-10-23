from rest_framework.response import Response
from rest_framework import status, generics
from django.contrib.auth import authenticate
from .models import RegularUser, BusinessUser
from .serializers import RegularUserSerializer, BusinessUserSerializer, LoginSerializer


class RegularUserCreate(generics.CreateAPIView):  # 일반 사용자 뷰
    queryset = RegularUser.objects.all()
    serializer_class = RegularUserSerializer


class BusinessUserCreate(generics.CreateAPIView):  # 사업자용 뷰
    queryset = BusinessUser.objects.all()
    serializer_class = BusinessUserSerializer

class UserLogin(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username=username, password=password)

            if user is not None:
                print(f"{username}님이 로그인했습니다.")
                return Response({"message": "로그인 성공", "username": user.username}, status=status.HTTP_200_OK)
            return Response({"message": "잘못된 아이디 또는 비밀번호"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
