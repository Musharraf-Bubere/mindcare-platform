from flask import Blueprint, request, jsonify

from services.matching_service import MatchingService

matching_bp = Blueprint("matching", __name__)


@matching_bp.route("/matching", methods=["POST"])
def match_therapists():

    try:
        assessment = request.get_json()

        recommendations = MatchingService.match_therapists(assessment)

        return jsonify({
            "success": True,
            "count": len(recommendations),
            "therapists": recommendations
        }), 200

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500