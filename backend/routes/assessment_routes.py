from flask import Blueprint, jsonify, request

from utils.auth_middleware import token_required
from models.assessment_model import AssessmentModel
from models.audit_model import AuditModel

assessment_bp = Blueprint("assessment", __name__)


# -------------------------
# Get Assessment Questions
# -------------------------
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


# -------------------------
# Submit Assessment
# -------------------------
@assessment_bp.route("/assessment/submit", methods=["POST"])
@token_required
def submit_assessment():

    user_id = request.user["id"]

    data = request.get_json()

    responses = []

    for question_id, answer in data.items():

        # Multiple Selection
        if isinstance(answer, list):

            for option in answer:

                responses.append({
                    "question_id": int(question_id),
                    "selected_option": option
                })

        # Single Selection
        else:

            responses.append({
                "question_id": int(question_id),
                "selected_option": answer
            })

    AssessmentModel.save_assessment(
        user_id,
        responses
    )

    AuditModel.add_log(
        user_id,
        "Submitted mental health assessment"
    )

    return jsonify({
        "success": True,
        "message": "Assessment submitted successfully"
    }), 200