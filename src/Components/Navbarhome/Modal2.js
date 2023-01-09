import React from 'react'
import './Modal2.css'
function Modal2({ setOpenModal }) {
  return (
    <div className="modal2Background">
      <div className="modal2Container">
        <div className="close2">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title2">
          <h1>Connexion</h1>
        </div>
        <input className="input1" type="email" placeholder="Adresse email" /> 
        <input className="input2" type="password" placeholder="Mot de passe" /> 

          <button className="btn">Se connecter</button>
        
        <h6>Nouveau sur AQAR? Créer votre compte</h6>
      </div>
    </div>
  );
}
 

export default Modal2
