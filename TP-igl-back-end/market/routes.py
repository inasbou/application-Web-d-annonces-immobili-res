from flask import jsonify, request
from market import app, db
from market.models import Annonce, AnnonceSchema, User, UserSchema
import pickle
from joblib import dump, load
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import sklearn
from sklearn.model_selection import train_test_split
import category_encoders as ce
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LinearRegression
from tabulate import tabulate
import os



annonce_schema = AnnonceSchema()
annonces_schema = AnnonceSchema(many=True)   

user_schema = UserSchema()
users_schema = UserSchema(many=True) 



#Affichage tous les annonces 
@app.get("/AllAnnonces")
def get_annonces(): 
    all_annonces = Annonce.query.all()
    annonces = annonces_schema.dump(all_annonces)
    return jsonify(annonces)


@app.post("/user")
def create_user():
    id_user = request.json['id_user']
    username = request.json['username']
    fullname = request.json['fullname']
    email = request.json['email']
    address = request.json['address']
    password = request.json['password']
    profile_pic = request.json['profile_pic']
    num_telephone = request.json['num_telephone']

    
    user_ = User(id_user, username, fullname, email, address, password, profile_pic, num_telephone)
    
    db.session.add(user_ )
    db.session.commit()
    return user_schema.jsonify(user_ )

#Deposer un annonce 
@app.post("/annonce")
def create_annonce():
    id_annonce = request.json['id_annonce']
    categorie = request.json['categorie']
    type_annonce = request.json['type_annonce']
    surface = request.json['surface']
    description = request.json['description']
    prix = request.json['prix']
    wilaya = request.json['wilaya']
    commune = request.json['commune']
    adresse = request.json['adresse']
    photo = request.json['photo']
    
    annonce = Annonce(id_annonce, categorie, type_annonce, surface, description, prix, wilaya, commune, adresse, photo)
    
    db.session.add(annonce)
    db.session.commit()
    return annonce_schema.jsonify(annonce)


#filtrage_Annonce 
# % le type  
@app.get("/FiltAnnonce/type/<type>")
def filt_annonces_type(type):
    #type = input("le type svp ")
    annonce = Annonce.query.filter_by(type_annonce= type).all()
    annonce = annonces_schema.dump(annonce)
    return jsonify(annonce)
# % la wilaya 
@app.get("/FiltAnnonce/wilaya/<wilayaa>")
def filt_annonces_wilaya (wilayaa):
    annonce = Annonce.query.filter_by(wilaya= wilayaa).all()
    annonce = annonces_schema.dump(annonce)
    return jsonify(annonce)
# % la commune 
@app.get("/FiltAnnonce/commune/<comm>")
def filt_annonces_commune (comm):
    annonce = Annonce.query.filter_by(commune= comm).all()
    annonce = annonces_schema.dump(annonce)
    return jsonify(annonce)

#Rech des annonces 
@app.get("/Test/<mot>")
def search_mot(mot):
    for i in range(4):
       annonce = Annonce.query.get(i)
       print(dir(annonce))
       descr = annonce.description
       if descr.count(mot) == 1:
          annonce = annonce_schema.dump(annonce)
          
    return jsonify(annonce)
    #else:
       #  return jsonify({'message': 'Pas de resultat'})
            
           
#Supprimer Annonce
@app.delete("/annonce/<id>")
def delete_annonce(id) :
    annonce = Annonce.query.get(id)
    db.session.delete(annonce)
    db.session.commit()  
    return annonce_schema.jsonify(annonce)

#Consulter Annonce
@app.get("/consutation/<id>")
def get_annonce(id):
    annonce = Annonce.query.get(id)
    annonce = annonce_schema.dump(annonce)
    return jsonify(annonce)

#Affichage plus de details sur user 
@app.get("/Annonce/<user_id>")
def details(user_id):
    user_ = User.query.get(user_id)
    user_ = annonce_schema.dump(user_)
    return jsonify(user_)



#Telecharger un photo et sauvegarder
@app.route('/upload', methods=['POST'])
def upload():
    
    if 'file' not in request.files:
        return jsonify({'error': 'photo not provided'}), 400
    if file.filename == '':
        return jsonify({'error': 'no file selected'}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    return jsonify({'msg': 'photo uploaded successfully '})
      

   # pic = request.files['pic']
   # if not pic:
   #     return 'No pic uploaded!', 400

   # filename = secure_filename(pic.filename)
   # mimetype = pic.mimetype
   # if not filename or not mimetype:
       # return 'Bad upload!', 400
