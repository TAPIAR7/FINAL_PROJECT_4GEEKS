"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Chassis_Parts
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/chassis_parts', methods=['GET'])  #aquí especificamos la ruta para el endpoint y especificamos que este endpoint acepta solicitudes GET
def getchasis():                        #este método se llamará cuando el cliente haga el request
    parts = Chassis_Parts.query.all()
    request = list(map(lambda x: x.serialize(), parts ))
    return jsonify( request), 200 














