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