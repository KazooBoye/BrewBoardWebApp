from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db import connection, DatabaseError
import json
from .models import create_user
from django.views.decorators.http import require_http_methods

@csrf_exempt

def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            user_firstname = data.get('firstName')
            user_lastname = data.get('lastName')
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            phone_number = data.get('phoneNumber')
            location = data.get('location')
            is_shop_account = data.get('isShopAccount', False)

            create_user(user_firstname, user_lastname, username, email, password, phone_number, location, is_shop_account)
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
        phone_number = data.get('phone_number')

        with connection.cursor() as cursor:
            try:
                # Call the PostgreSQL function with either email or phone number
                cursor.execute('SELECT login_user(%s, %s, %s);', [password, email, phone_number])
                result = cursor.fetchone()[0]  # Get the result of the function call

                if result:  # result is True (login successful)
                    return JsonResponse({'message': 'Login successful'})
                else:  # result is False (login failed)
                    return JsonResponse({'error': 'Invalid credentials'}, status=400)
            except DatabaseError as e:
                return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405) 

@csrf_exempt
@require_http_methods(["GET"])
def get_user_data(request, username):
    with connection.cursor() as cursor:
        try:
            cursor.execute('SELECT * FROM get_user_data(%s);', [username])
            user_data = cursor.fetchone()

            if user_data:
                data = {
                    'username': user_data[0],
                    'contribution_points': user_data[1],
                    'is_shop_account': user_data[2]
                }
                return JsonResponse(data)
            else:
                return JsonResponse({'error': 'User not found'}, status=404)
        except DatabaseError as e:
            return JsonResponse({'error': str(e)}, status=500)
