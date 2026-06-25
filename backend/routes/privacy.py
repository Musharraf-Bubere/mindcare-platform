from flask import Blueprint, request, jsonify
from models.privacy_model import PrivacyModel
from models.audit_model import AuditModel

privacy_bp = Blueprint("privacy", __name__)


# ----------------------------
# Get Privacy Settings
# ----------------------------
@privacy_bp.route("/privacy/<int:user_id>", methods=["GET"])
def get_privacy(user_id):

    settings = PrivacyModel.get_settings(user_id)

    if settings:
        return jsonify({
            "success": True,
            "settings": settings
        })

    return jsonify({
        "success": True,
        "settings": {
            "therapist_access": False,
            "research_usage": False,
            "email_notifications": True,
            "profile_public": False,
            "share_assessment": True,
            "therapist_messaging": True
        }
    })


# ----------------------------
# Save Privacy Settings
# ----------------------------
@privacy_bp.route("/privacy", methods=["POST"])
def save_privacy():

    data = request.get_json()

    PrivacyModel.save_settings(
        data["user_id"],
        data.get("therapist_access", False),
        data.get("research_usage", False),
        data.get("email_notifications", True),
        data.get("profile_public", False),
        data.get("share_assessment", True),
        data.get("therapist_messaging", True)
    )

    # Audit Log
    AuditModel.add_log(
        data["user_id"],
        "Updated privacy preferences"
    )

    return jsonify({
        "success": True,
        "message": "Privacy settings updated successfully."
    })


# ----------------------------
# Get Complete User Data
# ----------------------------
@privacy_bp.route("/privacy/data/<int:user_id>", methods=["GET"])
def get_user_data(user_id):

    try:

        data = PrivacyModel.get_user_data(user_id)

        return jsonify({
            "success": True,
            "data": data
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# ----------------------------
# Download Data Audit Log
# ----------------------------
@privacy_bp.route("/privacy/download-log", methods=["POST"])
def download_log():

    try:

        data = request.get_json()

        AuditModel.add_log(
            data["user_id"],
            "Downloaded personal data"
        )

        return jsonify({
            "success": True,
            "message": "Download activity logged."
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


# ----------------------------
# Delete Account
# ----------------------------
@privacy_bp.route("/privacy/delete/<int:user_id>", methods=["DELETE"])
def delete_user_data(user_id):

    try:

        # Audit Log
        AuditModel.add_log(
            user_id,
            "Requested permanent account deletion"
        )

        PrivacyModel.delete_user_data(user_id)

        return jsonify({
            "success": True,
            "message": "Your account and personal data have been deleted successfully."
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500