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
            t.therapist_id,
            t.user_id,
            u.full_name,
            u.email,
            t.specialization,
            t.experience,
            t.qualification,
            t.languages,
            t.therapy_methods,
            t.fee_range,
            t.session_mode,
            t.bio,
            t.rating
        FROM therapists t
        INNER JOIN users u
            ON t.user_id = u.id
        """

        cursor.execute(query)
        therapists = cursor.fetchall()

        cursor.close()
        conn.close()

        return therapists