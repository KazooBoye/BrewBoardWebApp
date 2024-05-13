from rest_framework import serializers
# from .models import Note
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "password"]
        extra_kwargs = {"password": {"write_only": True}}
        
    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(email=validated_data['email'], password=validated_data['password'])
        return user
    
# class NoteSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Note
#         fields = ["id", "title", "content", "created_at", "author"]
#         extra_kwargs = {"author": {"read_only": True}}