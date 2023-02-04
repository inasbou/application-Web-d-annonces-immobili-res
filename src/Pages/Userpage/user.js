import React, { useState, useEffect  } from "react";
import './Userpage.css'
import Navbar from '../../Components/Navbar'; 
import {faArrowTurnUp , faPen , faUser , faPager} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Userimage from '../../assets/Ellipse 1.png'; 
import { Link } from "react-router-dom";
const Userpage =() => {
const [user, setUser] = useState([]);

  
  //////recuperer annonces //////
 useEffect(()=>{
   fetch('http://127.0.0.1:5000/Current_User',{
     'methods':'GET',
     headers : {
       'Content-Type':'application/json'
     }
   })
   
   .then(response => response.json())
   .then((data)=> setUser(data));
  //  .then(response => setUser(response)) 
  // .catch(error => console.log(error))
   console.log(user);
  

 },[]) ;
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
      <Link to="/mesannonces" state={{data:user}}>
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
     
     { (user.map((userr) => (
     <div className="image">
      <div>
          <img src={userr.profile_pic} alt="user"/>
        </div>
        <div className="infos">
          <p className="titrex"> Nom et prénom</p>
          <p className="affichage">{userr.name}</p>
          <p className="titrex">Adresse email </p>
          <p className="affichage">{userr.email}</p>
          <p className="titrex">Numero de téléphone</p>
          <p className="affichage">{userr.num_telephone}</p>
          <p className="titrex">Adresse</p>
          <p className="affichage"></p>
          <a>
            <FontAwesomeIcon icon={faPen} />
              Modifier Mes informations
          </a>
        </div> </div>
        )) ) }
     </div>
    </div>
    </>
  )
}

export default Userpage