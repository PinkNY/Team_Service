from django.conf import settings

class DevAzureRouter:
    """
    개발 서버와 배포 서버(Azure) 간의 데이터베이스 라우팅을 관리하는 클래스입니다.
    각 모델이 어느 데이터베이스를 사용하는지 결정합니다.
    """

    def db_for_read(self, model, **hints):
        """읽기 작업을 할 때 어느 데이터베이스를 사용할지 결정"""
        if settings.DEBUG:
            return 'default_dev'  # 개발 환경에서 개발 DB 사용
        return 'default_azure'  # 배포 환경에서 Azure DB 사용

    def db_for_write(self, model, **hints):
        """쓰기 작업을 할 때 어느 데이터베이스를 사용할지 결정"""
        if settings.DEBUG:
            return 'default_dev'  # 개발 환경에서 개발 DB 사용
        return 'default_azure'  # 배포 환경에서 Azure DB 사용

    def allow_relation(self, obj1, obj2, **hints):
        """두 개의 객체 간의 관계를 허용할지 결정"""
        if obj1._state.db in ('default_dev', 'default_azure') and obj2._state.db in ('default_dev', 'default_azure'):
            return True
        return None

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """특정 데이터베이스에 대해 마이그레이션을 허용할지 결정"""
        if settings.DEBUG and db == 'default_dev':
            return True  # 개발 서버에서 기본 DB에 대해 마이그레이션 허용
        elif not settings.DEBUG and db == 'default_azure':
            return True  # 배포 서버에서 Azure DB에 대해 마이그레이션 허용
        return False  # 다른 경우 마이그레이션 허용 안 함
