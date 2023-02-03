from flask import jsonify, request, Response
from market import app, db
from market.models import Annonce, AnnonceSchema, User,  UserSchema, Img, Img2, Commentaire, Img2Schema,ImgSchema, ComntSchema
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
import datetime
from datetime import datetime
from datetime import date
from pprint import pprint
from werkzeug.utils import secure_filename
from datetime import date





user_schema = UserSchema()
users_schema = UserSchema(many=True) 

annonce_schema = AnnonceSchema()
annonces_schema = AnnonceSchema(many=True)  

comn_schema = ComntSchema()
comns_schema = ComntSchema(many=True)  



#Creation account user 
@app.route('/authe', methods=['GET','POST'])
def auth():
 
    if request.method == 'POST':
     data = request.get_json()
     fullname = data["name"]
     email = data["email"]
     profile_pic  = data["picture"]
     address = 'llll'
     num_telephone = 213699441980


    
     user = User(  fullname, email, address, profile_pic, num_telephone)

     db.session.add(user)
     db.session.commit()
     
    elif request.method == 'GET':
         data = request.get_json()
         fullname = data["name"]
         email = data["email"]
         profile_pic  = data["picture"]
         address = 'llll'
         num_telephone = 213699441980
        
         userr = User.query.filter_by(email= emaill ).all()
         userr = user_schema.dump(userr)
         return jsonify( {
                       "id_user": user.id_user,
                       "fullname": user.fullname,
                       "email" : user.email,
                       "address" : user.address, 
                       "profile_pic": user.profile_pic,
                       "num_telephone": user.num_telephone,
                       
                    }  
                  ) 
   # return user_schema.jsonify(user)


 #------------------------------------------------------------------------------#

#------------------------------------------------------------------------------#

#Affichage tous les annonces 
@app.get("/AllAnnonces")
def get_annonces(): 
    all_annonces = Annonce.query.all()
    annonces = annonces_schema.dump(all_annonces)
    return jsonify(annonces)

#------------------------------------------------------------------------------#

#Affichage tous les utilisateurs
@app.get("/AllUsers")
def get_users(): 
    all_users = User.query.all()
    users = users_schema.dump(all_users)
    return jsonify(users)

#------------------------------------------------------------------------------#

#Creation account user 
@app.post("/user")
def create_user():

    fullname = request.json['fullname']
    email = request.json['email']
    address = request.json['address']
    profile_pic = request.json['profile_pic']
    num_telephone = request.json['num_telephone']

    
    user = User(  fullname, email, address, profile_pic, num_telephone)

    db.session.add(user)
    db.session.commit()
    return jsonify( {
                       "fullname": user.fullname,
                       "email" : user.email,
                       "address" : user.address, 
                       "profile_pic": user.profile_pic,
                       "num_telephone": user.num_telephone,
                       
                    }  
                  ) 
   # return user_schema.jsonify(user)


 #------------------------------------------------------------------------------#

#Deposer une annonce 
@app.post("/annonces/<id_user>")
def createe_annonce(id_user):

    data = request.get_json()
    titre = data["titre"]
    categorie = data["categories"]
    type_annonce  = data["type"]
    surface = data["surface"]
    description = data["description"]
    prix= data["prix"]
    wilaya  = data["wilaya"]
    commune = data["commune"]
    adresse = data["lien"]
    photo = "Picc"
    jour = datetime.now().date().day
    mois = datetime.now().date().month
    annee = datetime.now().date().year
    annonce = Annonce(titre,categorie, type_annonce, surface, description, prix, wilaya, commune, adresse, photo,jour, mois, annee, id_user )
    print(annonce)
    db.session.add(annonce)
    db.session.commit()
    

 
    return annonce_schema.jsonify(annonce)

#------------------------------------------------------------------------------#

#------------------------------------------------------------------------------#

#Deposer une annonce 
@app.post("/annonce/<id_user>")
def create_annonce(id_user):

    categorie = request.json['categorie']
    type_annonce = request.json['type_annonce']
    surface = request.json['surface']
    description = request.json['description']
    prix = request.json['prix']
    wilaya = request.json['wilaya']
    commune = request.json['commune']
    adresse = request.json['adresse']
    photo = "hhhhh"
    date_annonce = datetime.now()
   
    annonce = Annonce(categorie, type_annonce, surface, description, prix, wilaya, commune, adresse, photo,  date_annonce, id_user )
    
    db.session.add(annonce)
    db.session.commit()
    return annonce_schema.jsonify(annonce)

#------------------------------------------------------------------------------#

#Consulter User
@app.get("/consul/<id_user>")
def get_user(id_user):
    userr = User.query.get(id_user)
    today = datetime.now().date().year

    #day = today.day

    print(today)

    return user_schema.jsonify(userr)

    # return jsonify( {
    #                    "username": userr.username,
    #                    "fullname": userr.fullname,
    #                    "email" : userr.email,
    #                    "address" : userr.address, 
    #                    "password" : userr.password,
    #                    "profile_pic": userr.profile_pic,
    #                    "num_telephone": userr.num_telephone
    #                 }  
    #               )     


#------------------------------------------------------------------------------#

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

#------------------------------------------------------------------------------#

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
            

#------------------------------------------------------------------------------#
         
#Supprimer Annonce
@app.delete("/annonce/<id>")
def delete_annonce(id) :
    annonce = Annonce.query.get(id)
    db.session.delete(annonce)
    db.session.commit()  
    return annonce_schema.jsonify(annonce)

#------------------------------------------------------------------------------#

#Consulter Annonce avec les inf sur l utolisateur 
@app.get("/consultation/<id_annonce>")
def get_annonce(id_annonce):
    annonce = Annonce.query.get(id_annonce)
    print(annonce.owner_id)
    userr = User.query.get(annonce.owner_id)
    print(userr)
    return jsonify( {      
                           "id_annonce" : annonce.id_annonce,
                           "categorie" : annonce.categorie,
                           "type_annonce" : annonce.type_annonce,
                           "surface" : annonce.surface,
                           "description" : annonce.description,
                           "prix" : annonce.prix,
                           "wilaya" : annonce.wilaya,
                           "commune" : annonce.commune,
                           "adresse" : annonce.adresse,
                           "photo" : annonce.photo, 
                           "owner_id" : annonce.owner_id,
                           "fullname": userr.fullname,
                           "email" : userr.email,
                           "address" : userr.address, 
                          "profile_pic": userr.profile_pic,
                          "num_telephone": userr.num_telephone
                    }
                    

                 
                  )     

#------------------------------------------------------------------------------#

#Affichage plus de details sur user 
@app.get("/Annonce/<user_id>")
def details(user_id):
    user_ = User.query.get(user_id)
    user_ = annonce_schema.dump(user_)
    return jsonify(user_)

#------------------------------------------------------------------------------#

# upload un photo pour une annonce 
@app.post("/upload/<id_annonce>")
def upload(id_annonce):

    file = request.files['image']
    # if file not in request.files:
    #   return jsonify({'error': 'photo not provided'}), 400
    if not file:
        return jsonify({'error': 'No pic uploaded!'}), 400
        # return 'No pic uploaded!', 400

    filename = secure_filename(file.filename)
    mimetype = file.mimetype
    if not filename or not mimetype:
        return jsonify({'error': 'Bad upload!'}), 400


    img = Img (img=file.read(), name=filename, mimetype=mimetype, annon= id_annonce)
    db.session.add(img)
    db.session.commit()

    return  jsonify({'msg': 'Img Uploaded! '}), 200

#------------------------------------------------------------------------------#

#recupere photo d annonce du BD
@app.get('/recuper/<id>')
def get_img(id):
    img = Img.query.filter_by(annon=id).first()
    if not img:
        return 'Img Not Found!', 404

    # return Response( img.img, mimetype=img.mimetype)
    return  jsonify({"id_Img" : img.id_Img,
                     "name" : img.name})

#------------------------------------------------------------------------------#

# upload une photo de profile
@app.post("/upload2/<id_user>")
def upload2(id_user):

    file = request.files['']
    if not file:
        return jsonify({'error': 'No pic uploaded!'}), 400
        # return 'No pic uploaded!', 400

    filename = secure_filename(file.filename)
    mimetype = file.mimetype
    if not filename or not mimetype:
        return jsonify({'error': 'Bad upload!'}), 400



    img = Img2 (img=file.read(), name=filename, mimetype=mimetype, utilis= id_user)
    db.session.add(img)
    db.session.commit()

    return  jsonify({'msg': 'Img Uploaded! '}), 200

#------------------------------------------------------------------------------#

#recupere photo de profilw du BD
@app.get('/recuper2/<id>')
def get_img2(id):
    img = Img2.query.filter_by(id_Img=id).first()
    if not img:
        return 'Img Not Found!', 404

    return Response(img.img, mimetype=img.mimetype)

#------------------------------------------------------------------------------#
#Deposer un commentaire 
@app.post("/commentaire/<id_annonce>")
def create_commentaire(id_annonce):

    contenu = request.json['contenu']
    comnt = Commentaire(contenu, id_annonce)
    
    db.session.add(comnt)
    db.session.commit()
    comnt = comn_schema.dump(comnt)
    return jsonify(comnt)
    # return annonce_schema.jsonify(comnt)

  

          #          {
                  #         "username": userr.username,
                #        "fullname": userr.fullname,
                     #       "email" : userr.email,
                      #      "address" : userr.address, 
                        #    "password" : userr.password,
                        #    "profile_pic": userr.profile_pic,
                        #    "num_telephone": userr.num_telephone

                 #    }   
