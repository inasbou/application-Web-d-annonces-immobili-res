import React from 'react'
import './Modal.css'
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="close">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Créer votre compte</h1>
        </div>
        
          <button className="googlebtn">
            <button className="google">
           <FontAwesomeIcon icon={faGoogle}/>
           </button>
            S'inscrire avec Google</button>
        
        <h6>En cliquant sur Inscrivez vous, vous indiquez que vous avez lu, compris et accepté les conditions d'utilisation de AQAR.</h6>
      </div>
    </div>
  );
}
 

export default Modal
