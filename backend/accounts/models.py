from django.db import connection

def create_user(firstName, lastName, username, email, password, phoneNumber, location, isShopAccount):
    with connection.cursor() as cursor:
        try:
            cursor.callproc('create_user', [firstName, lastName, username, email, password, phoneNumber, location, isShopAccount])
        except Exception as e:
            # Handle exception raised by the trigger
            print(f"Error creating user: {str(e)}")