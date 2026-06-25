from flask import Blueprint, jsonify
from models.audit_model import AuditModel

audit_bp = Blueprint("audit", __name__)


@audit_bp.route("/audit/<int:user_id>", methods=["GET"])
def get_audit_logs(user_id):

    try:

        logs = AuditModel.get_logs(user_id)

        return jsonify({
            "success": True,
            "logs": logs
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500