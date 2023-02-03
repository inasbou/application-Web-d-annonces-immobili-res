import React, { useState, useEffect  } from "react";
import './Userpage.css'
import Navbar from '../../Components/Navbar/Navbar'; 
import {faArrowTurnUp , faPen , faUser , faPager} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Userimage from '../../assets/Ellipse 1.png'; 
const Userpage =() => {
  const [user, setUser] = useState([]);
  
  //////recuperer annonces //////
 useEffect(()=>{
   fetch('http://127.0.0.1:5000/authe',{
     'methods':'GET',
     headers : {
       'Content-Type':'application/json'
     }
   })
   
   .then(response => response.json())
   .then(response => setUser(response)) 
  .catch(error => console.log(error))
   console.log(user.id);

 },[]) 
  return (
    <>
    <Navbar/>
    <div className="userpage"> 
     <button className="retourbtn" > 
     <FontAwesomeIcon icon={faArrowTurnUp} />
      <a href="/main">Retour</a> 
      </button>
     <div className="box1"> 
      <div className="links">
      <a href="/userpage">
      <FontAwesomeIcon icon={faUser} />
      Mon Compte
      </a>
      <a href="/mesannonce">
      <FontAwesomeIcon icon={faPager} />
      Mes annonces
      </a>
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
          <a>
            <FontAwesomeIcon icon={faPen} />
              Modifier la photo de profile
          </a>
        </div>
        <div className="infos">
          <p> Nom et prénom</p>
          <input className="nom" type="text"  />
          <p>Adresse email </p>
          <input className="email" type="text" />
          <p>Numero de téléphone</p>
          <input className="numtlfn" type="text" />
          <p>Adresse</p>
          <input className="adresse" type="text" />
        </div>
        
     </div>
    </div>
    </>
  )
}

export default Userpage
