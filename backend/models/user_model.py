import bcrypt
from models.db import get_db_connection


class UserModel:

    @staticmethod
    def create_user(name, email, password, role, phone, gender, age):
        conn = get_db_connection()
        cursor = conn.cursor()

        # Hash the password before storing it
        hashed_password = bcrypt.hashpw(
            password.encode("utf-8"),
            bcrypt.gensalt()
        ).decode("utf-8")

        query = """
        INSERT INTO users
        (full_name, email, password, role, phone, gender, age)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        """

        values = (
            name,
            email,
            hashed_password,
            role,
            phone,
            gender,
            age
        )

        cursor.execute(query, values)
        conn.commit()

        user_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return user_id