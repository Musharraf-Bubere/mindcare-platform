from flask import Blueprint, jsonify, request

from utils.auth_middleware import token_required
from models.login_model import LoginModel
from models.audit_model import AuditModel

profile_bp = Blueprint("profile", __name__)


@profile_bp.route("/profile", methods=["GET"])
@token_required
def get_profile():

    user_id = request.user["id"]

    user = LoginModel.get_user_by_id(user_id)

    if not user:
        return jsonify({
            "success": False,
            "message": "User not found"
        }), 404

    return jsonify({
        "success": True,
        "user": user
    }), 200


@profile_bp.route("/profile", methods=["PUT"])
@token_required
def update_profile():

    user_id = request.user["id"]

    data = request.get_json()

    full_name = data.get("full_name")
    email = data.get("email")
    phone = data.get("phone")
    age = data.get("age")

    # Update User
    LoginModel.update_user(
        user_id,
        full_name,
        email,
        phone,
        age
    )

    # Audit Log
    AuditModel.add_log(
        user_id,
        "Updated profile information"
    )

    # Get Updated User
    user = LoginModel.get_user_by_id(user_id)

    return jsonify({
        "success": True,
        "message": "Profile updated successfully",
        "user": user
    }), 200