from flask import Blueprint, jsonify, request

from utils.auth_middleware import token_required
from models.assessment_model import AssessmentModel
from models.audit_model import AuditModel

assessment_bp = Blueprint("assessment", __name__)


@assessment_bp.route("/assessment/questions", methods=["GET"])
def get_questions():

    data = AssessmentModel.get_all_questions()

    questions = {}

    for row in data:

        question_id = row["id"]

        if question_id not in questions:

            questions[question_id] = {
                "id": question_id,
                "question_number": row["question_number"],
                "question_text": row["question_text"],
                "selection_type": row["selection_type"],
                "options": []
            }

        questions[question_id]["options"].append({
            "id": row["option_id"],
            "text": row["option_text"]
        })

    return jsonify({
        "success": True,
        "questions": list(questions.values())
    })


@assessment_bp.route("/assessment/submit", methods=["POST"])
@token_required
def submit_assessment():

    user_id = request.user["id"]

    data = request.get_json()

    responses = []

    question_mapping = {
        1: data.get("ageGroup"),
        2: data.get("genderPreference"),
        3: data.get("language"),
        4: data.get("concern"),
        5: data.get("severity"),
        6: data.get("risk"),
        7: data.get("therapyApproach"),
        8: data.get("therapyMethod"),
        9: data.get("availability"),
        10: data.get("sessions"),
        11: data.get("budget"),
        12: data.get("goal")
    }

    for question_id, answer in question_mapping.items():

        responses.append({
            "question_id": question_id,
            "selected_option": answer
        })

    # Save Assessment
    AssessmentModel.save_assessment(user_id, responses)

    # Audit Log
    AuditModel.add_log(
        user_id,
        "Submitted mental health assessment"
    )

    return jsonify({
        "success": True,
        "message": "Assessment submitted successfully"
    }), 200