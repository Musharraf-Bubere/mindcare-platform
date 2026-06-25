from models.db import get_db_connection


class TherapistModel:

    @staticmethod
    def add_therapist(
        user_id,
        specialization,
        experience,
        qualification,
        languages,
        therapy_methods,
        fee_range,
        session_mode,
        bio
    ):

        conn = get_db_connection()
        cursor = conn.cursor()

        query = """
        INSERT INTO therapists
        (
            user_id,
            specialization,
            experience,
            qualification,
            languages,
            therapy_methods,
            fee_range,
            session_mode,
            bio
        )
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s)
        """

        values = (
            user_id,
            specialization,
            experience,
            qualification,
            languages,
            therapy_methods,
            fee_range,
            session_mode,
            bio
        )

        cursor.execute(query, values)
        conn.commit()

        therapist_id = cursor.lastrowid

        cursor.close()
        conn.close()

        return therapist_id
    

    @staticmethod
    def get_all_therapists():
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        query = """
        SELECT
            therapist_id,
            user_id,
            specialization,
            experience,
            qualification,
            languages,
            therapy_methods,
            fee_range,
            session_mode,
            bio,
            rating
        FROM therapists
        """

        cursor.execute(query)
        therapists = cursor.fetchall()

        cursor.close()
        conn.close()

        return therapists