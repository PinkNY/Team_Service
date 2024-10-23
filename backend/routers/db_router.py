import os
from django.conf import settings

class DevAzureRouter:
    """
    개발 서버와 Azure 데이터베이스 간의 라우팅을 관리하는 데이터베이스 라우터 클래스입니다.
    읽기, 쓰기, 관계 허용 및 마이그레이션을 각 데이터베이스에 대해 어떻게 처리할지 결정합니다.
    """

    def db_for_read(self, model, **hints):
        """읽기 작업을 할 때 어느 데이터베이스를 사용할지 결정합니다."""
        if settings.DEBUG:
            return 'default_dev'  # 개발 환경에서는 개발 서버 DB 사용
        return 'default_azure'  # 배포 환경에서는 Azure DB 사용

    def db_for_write(self, model, **hints):
        """쓰기 작업을 할 때 어느 데이터베이스를 사용할지 결정합니다."""
        if settings.DEBUG:
            return 'default_dev'  # 개발 환경에서는 개발 서버 DB 사용
        return 'default_azure'  # 배포 환경에서는 Azure DB 사용

    def allow_relation(self, obj1, obj2, **hints):
        """두 개의 객체 간의 관계를 허용할지 결정합니다."""
        db_set = {'default_dev', 'default_azure'}
        if obj1._state.db in db_set and obj2._state.db in db_set:
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """마이그레이션이 특정 데이터베이스에 대해 허용될지 결정합니다."""
        if settings.DEBUG and db == 'default_dev':
            return True  # 개발 환경에서 개발 서버에 마이그레이션 허용
        elif not settings.DEBUG and db == 'default_azure':
            return True  # 배포 환경에서 Azure에 마이그레이션 허용
        return False
