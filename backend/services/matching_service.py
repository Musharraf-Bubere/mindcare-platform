from models.therapist_model import TherapistModel


class MatchingService:

    @staticmethod
    def match_therapists(assessment):

        therapists = TherapistModel.get_all_therapists()

        recommendations = []

        concern = assessment.get("concern", "").lower()
        language = assessment.get("language", "").lower()
        session = assessment.get("sessions", "").lower()
        budget = assessment.get("budget", "").lower()

        for therapist in therapists:

            score = 0

            # Match specialization
            if concern in therapist["specialization"].lower():
                score += 5

            # Match language
            if language in therapist["languages"].lower():
                score += 3

            # Match session mode
            if session in therapist["session_mode"].lower():
                score += 2

            # Match budget
            if budget == therapist["fee_range"].lower():
                score += 2

            therapist["score"] = score
            recommendations.append(therapist)

        recommendations.sort(
            key=lambda x: x["score"],
            reverse=True
        )

        return recommendations