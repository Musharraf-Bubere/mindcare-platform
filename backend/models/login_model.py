from models.db import get_db_connection


class LoginModel:

    @staticmethod
    def get_user_by_email(email):
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        query = """
        SELECT *
        FROM users
        WHERE email = %s
        """

        cursor.execute(query, (email,))
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        return user
    
    @staticmethod
    def get_user_by_id(user_id):

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        query = """
        SELECT id,
               full_name,
               email,
               role,
               phone,
               gender,
               age
        FROM users
        WHERE id = %s
        """

        cursor.execute(query, (user_id,))
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        return user