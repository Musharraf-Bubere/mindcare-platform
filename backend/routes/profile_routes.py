from flask import Blueprint, jsonify, request

from utils.auth_middleware import token_required
from models.login_model import LoginModel

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