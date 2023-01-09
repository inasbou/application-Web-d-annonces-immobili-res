import React  from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './publier.css'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function publier(setOpenModal) {
  return (
    <>
    <Navbar/> 
    <div className="publier">
    <div className="close">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
    </div> 
      <div className="publier_inputs">
        <input className="titre" type="text" placeholder="Titre de l'annonce" />  
        <input className="categories" type="text" placeholder="Catégorie de l'annonce"/>
        <input className="type" type="text" placeholder="Type du bien immobilier"/>
        <input className="surface"  type="text" placeholder="Surface" />
        <input className="prix"  type="text" placeholder="Le prix" />
        <input className="lien"  type="url" placeholder="Lien de la localisation sur Google Map" />
        <input className="wilaya" type="text" placeholder="Wilaya"/>
        <input className="commune" type="text" placeholder="Commune"/>
        <input className="description"  type="text" placeholder="Description..." />
        <button className="photobtn">
         <FontAwesomeIcon icon={faPlusCircle}/> 
          Ajouter des photos
        </button>
        <div className="conditions">
        <input className="cond" type="checkbox"/>
          <p> J'accèpte que mes informations soient affichées parmi les détails de cet annonce </p>
        </div>
        <button className="publierbtn">
          Publier
        </button>
      </div>
    </div>
    
    </>
  )
}

export default publier
