from flask import Blueprint, request, jsonify
from models.user_model import UserModel

auth_bp = Blueprint("auth", __name__)


@auth_bp.route("/signup", methods=["POST"])
def signup():

    data = request.get_json()

    try:
        user_id = UserModel.create_user(
            data["name"],
            data["email"],
            data["password"],
            data["role"],
            data["phone"],
            data["gender"],
            data["age"]
        )

        return jsonify({
            "success": True,
            "message": "User registered successfully",
            "user_id": user_id
        }), 201

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500