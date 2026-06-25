from flask import Blueprint, request, jsonify
from models.therapist_model import TherapistModel

therapist_bp = Blueprint("therapist", __name__)


@therapist_bp.route("/therapists", methods=["POST"])
def add_therapist():

    try:
        data = request.get_json()

        therapist_id = TherapistModel.add_therapist(
            user_id=data["user_id"],
            specialization=data["specialization"],
            experience=data["experience"],
            qualification=data["qualification"],
            languages=data["languages"],
            therapy_methods=data["therapy_methods"],
            fee_range=data["fee_range"],
            session_mode=data["session_mode"],
            bio=data["bio"]
        )

        return jsonify({
            "success": True,
            "message": "Therapist added successfully",
            "therapist_id": therapist_id
        }), 201

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500
    

@therapist_bp.route("/therapists", methods=["GET"])
def get_all_therapists():

    try:
        therapists = TherapistModel.get_all_therapists()

        return jsonify({
            "success": True,
            "count": len(therapists),
            "therapists": therapists
        }), 200

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500