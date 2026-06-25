from models.db import get_db_connection


class AuditModel:

    @staticmethod
    def add_log(user_id, activity):

        conn = get_db_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO audit_logs
        (
            user_id,
            activity
        )
        VALUES (%s, %s)
        """

        cursor.execute(query, (user_id, activity))

        conn.commit()

        cursor.close()
        conn.close()


    @staticmethod
    def get_logs(user_id):

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        query = """
        SELECT
            id,
            activity,
            created_at
        FROM audit_logs
        WHERE user_id = %s
        ORDER BY created_at DESC
        """

        cursor.execute(query, (user_id,))

        logs = cursor.fetchall()

        cursor.close()
        conn.close()

        return logs