from flask import Blueprint, request, jsonify
from models.user_model import UserModel
from models.login_model import LoginModel
import bcrypt
from utils.jwt_helper import generate_token

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
    

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    # Find user by email
    user = LoginModel.get_user_by_email(email)

    # User not found
    if not user:
        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    # Verify password
    if not bcrypt.checkpw(password.encode("utf-8"),
                          user["password"].encode("utf-8")):

        return jsonify({
            "success": False,
            "message": "Invalid email or password"
        }), 401

    # Login successful
    token = generate_token(user)

    return jsonify({
        "success": True,
        "message": "Login successful",
        "token": token,
        "user": {
            "id": user["id"],
            "full_name": user["full_name"],
            "email": user["email"],
            "role": user["role"]
        }
    }), 200