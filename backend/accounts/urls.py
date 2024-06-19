from django.urls import path
from . import views

urlpatterns = [
    path('api/register/', views.register_user, name='register_user'),
    path('api/login/', views.login_user, name='login_user'),
    path('api/users/<str:username>/', views.get_user_data, name='get_user_data'),
]
