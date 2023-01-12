from flask import Flask, jsonify, request, abort
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.utils import secure_filename
from flask_restful import Resource, Api, reqparse
from datetime import datetime


UPLOAD_FOLDER = 'C:/Users/DELL/Desktop/Back/BackendTeam/instance/database.db'
ALLOWED_EXTENSTIONS = set(['png', 'jpg', 'jpeg', 'gif'])

def alowed_file(filename):
    return '.' in filename and filename.rsplite('.', 1)[1].lower() in ALLOWED_EXTENSTIONS

app = Flask(__name__)
#app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app)


db = SQLAlchemy(app)
ma = Marshmallow(app)  



from market import routes