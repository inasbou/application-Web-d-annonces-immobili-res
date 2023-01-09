import React from 'react'
import './Header.css'
import home from '../../assets/image.png'
import {faFacebook , faTwitter , faInstagram , faLinkedin , faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 

function Header() {
  return (
    <div className="header section__padding">
    <div className="header-content">
    
      <h1 className="gradient__text">AQAR, Votre partenaire immobilier privilégié</h1>
      <h6>Le site des annonces qui vous facilite l'échange, la vente, la location ou la locatin pour vacances de votre bien immobilier</h6>
      <div className="reseausocioaux">
        <p>RETROUVEZ-NOUS SUR</p>
        <div className="icons">
          <button>
          <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button>
          <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button>
          <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button>
          <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button>
          <FontAwesomeIcon icon={faYoutube} />
          </button>
        
        </div>
       </div> 
       
       </div> 
       <div className="header-image">
           <img src={home} alt ="home"/>
          </div> 
        
      </div>
  )

}

export default Header
