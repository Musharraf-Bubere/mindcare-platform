from models.db import get_db_connection


class PrivacyModel:

    @staticmethod
    def get_settings(user_id):

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        cursor.execute(
            "SELECT * FROM privacy_settings WHERE user_id=%s",
            (user_id,)
        )

        settings = cursor.fetchone()

        cursor.close()
        conn.close()

        return settings


    @staticmethod
    def save_settings(
        user_id,
        therapist_access,
        research_usage,
        email_notifications
    ):

        conn = get_db_connection()
        cursor = conn.cursor()

        cursor.execute(
            """
            INSERT INTO privacy_settings
            (
                user_id,
                therapist_access,
                research_usage,
                email_notifications
            )
            VALUES (%s,%s,%s,%s)
            ON DUPLICATE KEY UPDATE
                therapist_access=VALUES(therapist_access),
                research_usage=VALUES(research_usage),
                email_notifications=VALUES(email_notifications)
            """,
            (
                user_id,
                therapist_access,
                research_usage,
                email_notifications
            )
        )

        conn.commit()

        cursor.close()
        conn.close()


    @staticmethod
    def get_user_data(user_id):

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # User Profile
        cursor.execute("""
            SELECT
                id,
                full_name,
                email,
                phone,
                age,
                gender,
                role
            FROM users
            WHERE id = %s
        """, (user_id,))
        user = cursor.fetchone()

        # Assessment Responses
        cursor.execute("""
            SELECT
                q.question_text,
                ar.selected_option
            FROM assessment_responses ar
            JOIN questions q
                ON ar.question_id = q.id
            WHERE ar.user_id = %s
            ORDER BY q.question_number
        """, (user_id,))
        assessment = cursor.fetchall()

        # Privacy Settings
        cursor.execute("""
            SELECT
                therapist_access,
                research_usage,
                email_notifications
            FROM privacy_settings
            WHERE user_id = %s
        """, (user_id,))
        privacy = cursor.fetchone()

        cursor.close()
        conn.close()

        return {
            "profile": user,
            "assessment": assessment,
            "privacy": privacy
        }
    
    @staticmethod
    def delete_user_data(user_id):

        conn = get_db_connection()
        cursor = conn.cursor()

        # Delete assessment responses
        cursor.execute(
            "DELETE FROM assessment_responses WHERE user_id=%s",
            (user_id,)
        )

        # Delete privacy settings
        cursor.execute(
            "DELETE FROM privacy_settings WHERE user_id=%s",
            (user_id,)
        )

        # Delete therapist profile if it exists
        cursor.execute(
            "DELETE FROM therapists WHERE user_id=%s",
            (user_id,)
        )

        # Finally delete user
        cursor.execute(
            "DELETE FROM users WHERE id=%s",
            (user_id,)
        )

        conn.commit()

        cursor.close()
        conn.close()