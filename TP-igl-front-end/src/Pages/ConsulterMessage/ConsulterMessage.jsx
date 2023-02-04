import React from 'react'
import Navbar from '../../Components/Navbar'
import './ConsulterMessage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowTurnUp , faForward} from '@fortawesome/free-solid-svg-icons';
const ConsulterMessage = () => {
  return (
    <>
    <Navbar/>
    <div className="consultation">
    <button className="retourbtn" > 
     <FontAwesomeIcon icon={faArrowTurnUp} />
      <a href="/main"> Retour </a> 
      </button>

    <div className="messagebox">
        <div className="infoos">
         <p>Utilisateur</p>
         <p>Titre de l'annonce</p>
        </div>
         <div className="envoyermessagezone">
            <div className="message">
                <p>Bonjour monsieur, votre annonce m’intéresse.  Puis-je visiter l'endroit ce soir ? </p> </div>
             </div>
             <div className="envoyer">
                <input type="text" placeholder='Ecrire un message ...'/>
            <button className='btnenvoie'>
                <FontAwesomeIcon icon={faForward}/>
                <p>Envoyer</p>
            </button>
            </div>
        
        </div>
        </div>
      </>
  )
}

export default ConsulterMessage
