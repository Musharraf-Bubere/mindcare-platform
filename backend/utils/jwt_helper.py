import jwt
import datetime

from config import Config


def generate_token(user):

    payload = {
        "id": user["id"],
        "email": user["email"],
        "role": user["role"],
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=24)
    }

    token = jwt.encode(
        payload,
        Config.SECRET_KEY,
        algorithm="HS256"
    )

    return token