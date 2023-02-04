import pytest
from market import app, db
from flask import Flask
from market.models import User, Annonce

@pytest.fixture
def client():
    app.config['TESTING'] = True
    client = app.test_client()

    yield client

def test_delete_annonce(client):
    # Create a test user
    test_annonce = Annonce(
                titre= "Anonce Test",
                categorie= "Vente",
                type_annonce = "Maison",
                surface = 120,
                description = "Description Test",
                prix = 880,
                wilaya = "Tamanrasset",
                commune = "Ain Saleh",
                adresse = "Hai Salam",
                photo = "Pic Test", 
                jour = 15, 
                mois = 6,
                annee = 2023
                 )

    db.session.add(test_user)
    db.session.commit()

    # Send a DELETE request pour supprimer l'annonce to the endpoint 
    response = client.delete('/Supprimer/<test_annonce.id_annonce>')

    # verifier si le code == 200
    assert response.status_code == 200

    # verifier si l'annonce est bien supprimme 
    assert User.query.get(test_user.id_annonce) is None


    #----------------------------------------------------------------------------------
    #----------------------------------------------------------------------------------

def test_create_annonce(client):
    # Send a POST request to the create_user endpoint
    response = client.post(
        '/annonce/5',
        json={"titre": "Titre Anoonce",
          "categories" : "Vente",
          "type"  : "Maison",
          "surface" : 120,
          "description" : "Description Test",
          "prix": 700,
          "wilaya"  : "Tamanrasset",
          "commune" : "Ain Saleh",
          "lien" : "Hai Salam w diyar"}
    )

    # Check that the response status code is 201
    assert response.status_code == 201


    # Check that the annonce has been added to the database
    annonce = Annonce.query.filter_by(titre='Titre Anoonce').first()
    assert annonce.categorie == 'Vente'
    assert annonce.surface == 120


    #----------------------------------------------------------------------------------
    #----------------------------------------------------------------------------------

    def test_envoyer_message(client):
        # Send a POST request to the create_user endpoint
    response = client.post(
        'commentaire/5',
        json={"contenu": "Messsage Test" } )

    # Check that the response status code is 201
    assert response.status_code == 201


    # Check that the annonce has been added to the database
    comm = Commentaire.query.filter_by(contenu='Messsage Test').first()
    assert comm.annon_id == 5