from market import db, ma, app 
import sqlalchemy.types as types
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, date
from sqlalchemy import Enum 
from datetime import datetime 

class User(db.Model):
    __tablename__ = 'user'
    #serialize_only=()
    id_user = db.Column(db.Integer, primary_key=True )
    fullname = db.Column(db.String(100), unique=True, nullable=False )
    email = db.Column(db.String(100),nullable=False,unique=True)
    address = db.Column(db.String(100), nullable = False)
    profile_pic = db.Column(db.String(100), nullable = False)
    num_telephone = db.Column(db.Float(), nullable = False)
    annonces = db.relationship('Annonce', backref='user')
    Images = db.relationship('Img2', backref='user')


    def __init__(self, fullname, email, address, profile_pic, num_telephone):
        self.fullname = fullname
        self.email = email
        self.address= address
        self.profile_pic = profile_pic
        self.num_telephone = num_telephone 

class UserSchema(ma.Schema) :
    class Meta : 
        fields = ( 'id_user','fullname', 'email', 'address', 'profile_pic', 'num_telephone')


# with app.app_context() : 
#      db.drop_all()
#      db.create_all()

#------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------#

class Annonce(db.Model) :
    __tablename__ = 'annonce'
    titre = db.Column(db.String(100), nullable = False)
    id_annonce = db.Column(db.Integer(), primary_key = True)
    categorie = db.Column(db.String(100), nullable = False)
    type_annonce =  db.Column(db.String(100), nullable = False)
    surface = db.Column(db.Float(), nullable = False)
    description = db.Column(db.String(300), nullable = False)
    prix = db.Column(db.Integer(), nullable = False)
    wilaya = db.Column(db.String(30), nullable = False)
    commune = db.Column(db.String(30), nullable = False)
    adresse = db.Column(db.String(100), nullable = False)
    photo = db.Column(db.String(30), nullable = False)
    jour = db.Column(db.Integer(), nullable = False)
    mois = db.Column(db.Integer(), nullable = False)
    annee = db.Column(db.Integer(), nullable = False)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id_user'))
    photos = db.relationship('Img', backref='annonce')
    commentaires = db.relationship('Commentaire', backref='annonce')
    
    #likes = db.relationship('Like', backref='likes_owned_post')

    def __init__(self, titre, categorie, type_annonce, surface, description, prix, wilaya, commune, adresse, photo, jour, mois, annee, owner_id ) : 

        self.titre= titre
        self.categorie = categorie
        self.type_annonce = type_annonce
        self.surface = surface
        self.description = description
        self.prix = prix
        self.wilaya = wilaya
        self.commune = commune
        self.adresse = adresse
        self.photo = photo
        self.jour = jour
        self.mois = mois
        self.annee= annee
        self.owner_id = owner_id

class AnnonceSchema(ma.Schema) :
    class Meta : 
        fields = ('titre','id_annonce','categorie', 'type_annonce', 'surface', 'description', 'prix', 'wilaya', 'commune', 'adresse','photo', ' date_annonce', 'owner_id')


# with app.app_context() : 
#       db.drop_all()
#       db.create_all()

#------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------#

class Img(db.Model):
    __tablename__ = 'images'
    id_Img = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Text, unique=True, nullable=False)
    name = db.Column(db.Text, nullable=False)
    mimetype = db.Column(db.Text, nullable=False)
    annon = db.Column(db.Integer, db.ForeignKey('annonce.id_annonce'),nullable=False)

    # def __init__(self, img, name, mimetype, annon):
    #     self.img= img
    #     self.name = name 
    #     self.mimetype= mimetype
    #     self.annon = annon 

class ImgSchema(ma.Schema) :
    class Meta : 
        fields = ('id_Img','img','name','mimetype', 'annon')


#------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------#

class Img2 (db.Model):
    __tablename__ = 'images2'
    id_Img = db.Column(db.Integer, primary_key=True)
    img = db.Column(db.Text, unique=True, nullable=False)
    name = db.Column(db.Text, nullable=False)
    mimetype = db.Column(db.Text, nullable=False)
    utilis = db.Column(db.Integer, db.ForeignKey('user.id_user'),nullable=False)
    #annon = db.Column(db.Integer, db.ForeignKey('annonce.id_annonce'),nullable=False)

    # def __init__(self, img, name, mimetype, annon):
    #     self.img= img
    #     self.name = name 
    #     self.mimetype= mimetype
    #     self.annon = annon 


class Img2Schema(ma.Schema) :
    class Meta : 
        fields = ('id_Img','img','name','mimetype', 'annon')


#------------------------------------------------------------------------------------#
#------------------------------------------------------------------------------------#

class Commentaire (db.Model):
    #__tablename__ = 'user'
    #serialize_only=()
    __tablename__ = 'commentaire'
    id_comm = db.Column(db.Integer, primary_key=True, unique=True )
    contenu = db.Column(db.Text)
    annon_id = db.Column(db.Integer, db.ForeignKey('annonce.id_annonce'),nullable=False)

    def __init__(self, contenu, annon_id):
        self.contenu = contenu
        self.annon_id = annon_id

class ComntSchema(ma.Schema) :
    class Meta : 
        fields = ('contenu', 'annon_id')




#Enum('terrain', 'terrain agricole', 'appartement', 'maison', 'bungalow', name='type_annonce')
#Enum('vente', 'echange', 'location', 'location pour vacance', name='categorie_annonce')