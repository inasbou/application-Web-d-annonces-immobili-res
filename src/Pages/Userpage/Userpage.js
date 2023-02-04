
import React, {useState, useEffect} from "react";
import './Userpage.css'
import Navbar from '../../Components/Navbar'; 
import {faArrowTurnUp , faPen , faUser , faPager} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Userimage from '../../assets/logo.png'; 
import { Link } from "react-router-dom";
function Userpage() {
  return (
    <>
    <Navbar/> 
    <div className="userpage">
    <button className="retourbtn" > 
     <FontAwesomeIcon icon={faArrowTurnUp} />
      <a href="/main"> Retour </a> 
      </button>

      <div className="box1"> 
      <div className="links">
      <a href="/userpage">
      <FontAwesomeIcon icon={faUser} />
      Mon Compte
      </a>
      <Link to="/mesannonces">
      <FontAwesomeIcon icon={faPager} />
      Mes annonces
      </Link>
      </div>
      <div className="decnxn"  >
      <a href="/">
      Déconnexion
      </a>
      </div>
     </div>

     <div className="box2"> 
      <div className="image">
          <img src={Userimage} alt="user"/>
      </div> 
        <div className="infos">
          <p className="titrex"> Nom et prénom</p>
          <p className="affichage">Meradji Chaima</p>
          <p className="titrex"> Adresse email </p>
          <p className="affichage">kc_meradji@esi.dz</p>
          <p className="titrex">Numero de téléphone</p>
          <p className="affichage">0672226538</p>
          <p className="titrex">Adresse</p>
          <p className="affichage">Oued Smar</p>
          <a>
            <FontAwesomeIcon icon={faPen} />
              Modifier Mes informations
          </a>
        </div>
     </div>
     </div>
    </>
  )
}

export default Userpage
