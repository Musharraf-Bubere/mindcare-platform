from flask import Flask
from flask_cors import CORS

from routes.auth import auth_bp
from routes.profile_routes import profile_bp
from routes.therapist import therapist_bp
from routes.assessment_routes import assessment_bp
from routes.matching import matching_bp
from routes.privacy import privacy_bp
from routes.audit_routes import audit_bp

app = Flask(__name__)

CORS(app)

# Register Blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(profile_bp)
app.register_blueprint(therapist_bp)
app.register_blueprint(assessment_bp)
app.register_blueprint(matching_bp)
app.register_blueprint(privacy_bp)
app.register_blueprint(audit_bp)


@app.route("/")
def home():
    return "MindCare Backend Running Successfully!"


if __name__ == "__main__":
    app.run(debug=True)