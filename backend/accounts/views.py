from django.shortcuts import render
from rest_framework import generics
from .serializers import UserSerializer #NoteSerializer
from rest_framework.permissions import AllowAny#IsAuthenticated,
from .models import User #Note, User
from django.contrib.auth import get_user_model


User = get_user_model()


#delete user note
            
# class NoteDelete(generics.DestroyAPIView):
#     serializer_class = NoteSerializer
#     permission_classes = [IsAuthenticated]
    
#     def get_queryset(self):
#         user = self.request.user
#         return Note.objects.filter(author=user)
    
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    
class DeleteUserView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer