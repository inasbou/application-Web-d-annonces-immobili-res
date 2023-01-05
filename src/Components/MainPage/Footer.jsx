import React from 'react'
import background from '../../assets/background.png'
import {FaLinkedinIn} from'react-icons/fa'
import {RiFacebookFill} from'react-icons/ri'
import {BsInstagram} from'react-icons/bs'
//import {BsInstagram} from'react-icons/bs'
import {SiYoutube} from'react-icons/si'
const Footer = () => {
  return (
    <div  style={{ backgroundImage: `url(${background})` }} className='flex   flex-col md:flex-row md:justify-between  p-4 md:px-8 text-white '>
        <div>
      <h1 className='p-2 text-2xl  font-bold  text-center'><span className=' text-violet-500'>AQAR,</span>Votre partenaire <br/>immobilier privilégié  </h1> 
       <p   className='p-2 text-md   text-center'>le site des annonces qui vous facilite l'échange,<br/> la vente, la location ou la locatin <br/> pour vacances de votre bien immobilier </p> 
    </div>
    <div>
    <h1 className='p-2 text-2xl  font-bold  text-center'>RETROUVEZ-NOUS SUR </h1>
    <div className='flex flex-row justify-between px-2 text-violet-500'>
    <div className='  rounded-full bg-white p-2'><FaLinkedinIn/></div>
    <div className='  rounded-full bg-white p-2'><RiFacebookFill/></div>
    <div className=' rounded-full bg-white p-2'><BsInstagram/></div>
    <div className='  rounded-full bg-white p-2'><SiYoutube/></div>
    </div>
    <h1 className=' font-bold'>BESOIN D’AIDE?</h1>
    <h4>Contactez-nous à cette adresse <br/>helpservice@aqar.dz</h4></div>
    </div>
  )
}

export default Footer