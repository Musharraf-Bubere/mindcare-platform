from models.db import get_db_connection


class AssessmentModel:

    @staticmethod
    def get_all_questions():

        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        query = """
        SELECT
            q.id,
            q.question_number,
            q.question_text,
            q.selection_type,
            qo.id AS option_id,
            qo.option_text
        FROM questions q
        JOIN question_options qo
            ON q.id = qo.question_id
        ORDER BY q.question_number, qo.id
        """

        cursor.execute(query)

        data = cursor.fetchall()

        cursor.close()
        conn.close()

        return data

    @staticmethod
    def save_assessment(user_id, responses):

        conn = get_db_connection()
        cursor = conn.cursor()

        # Remove old responses
        cursor.execute(
            """
            DELETE FROM assessment_responses
            WHERE user_id=%s
            """,
            (user_id,)
        )

        query = """
        INSERT INTO assessment_responses
        (
            user_id,
            question_id,
            selected_option
        )
        VALUES
        (%s,%s,%s)
        """

        for response in responses:

            cursor.execute(
                query,
                (
                    user_id,
                    response["question_id"],
                    response["selected_option"]
                )
            )

        conn.commit()

        cursor.close()
        conn.close()

        return True