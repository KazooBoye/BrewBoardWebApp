from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection, DatabaseError
import json

import logging

logger = logging.getLogger(__name__)

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            firstName = data.get('firstName')
            lastName = data.get('lastName')
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            phoneNumber = data.get('phoneNumber')
            location = data.get('location')
            isShopAccount = data.get('isShopAccount', False)

            with connection.cursor() as cursor:
                cursor.callproc('create_user', [firstName, lastName, username, email, password, phoneNumber, location, isShopAccount])
                return JsonResponse({'message': 'User created successfully', 'redirect': '/login'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        password = data.get('password')
        email = data.get('email')
        phoneNumber = data.get('phoneNumber')

        with connection.cursor() as cursor:
            try:
                # Call the PostgreSQL function with either email or phone number
                cursor.execute('SELECT login_user(%s, %s, %s);', [password, email, phoneNumber])
                result = cursor.fetchone()[0]  # Get the result of the function call

                if result:  # result is True (login successful)
                    return JsonResponse({'message': 'Login successful'})
                else:  # result is False (login failed)
                    return JsonResponse({'error': 'Invalid credentials'}, status=400)
            except DatabaseError as e:
                return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)
