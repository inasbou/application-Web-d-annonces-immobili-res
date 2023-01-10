import React from 'react'
import {GrFavorite} from'react-icons/gr'
import {BsCashCoin}  from 'react-icons/bs'
import pc1 from "../../assets/pic1.png"
import pc2 from "../../assets/pic2.png"
import pc3 from "../../assets/pic3.png"
const Annonce = () => {
  const annonces=[
    { title: "Maison ",categorie:'vente',src:pc1 },
    { title: "Appartement ",categorie:'Location' , src:pc2 },
    { title: "Maison",categorie:'Location', src:pc1 },
    { title: "Maison",categorie:'Echange',  src:pc2  },
    { title: "Appartement ",categorie:'vente', src:pc3 },
    { title: "Appartement ",categorie:'Echange' ,src:pc3 },
    { title: "Appartement ",categorie:'vente' , src:pc2 },
    { title: "Maison ",categorie:'vente',src:pc1 },
    { title: "Appartement ",categorie:'Location' , src:pc2 },
    { title: "Maison",categorie:'Location', src:pc1 },
    { title: "Maison",categorie:'Echange',  src:pc2  },
    { title: "Appartement ",categorie:'vente', src:pc3 },
    { title: "Appartement ",categorie:'Echange' ,src:pc3 },
    { title: "Appartement ",categorie:'vente' , src:pc2 },
    { title: "Maison ",categorie:'vente',src:pc1 },
    { title: "Appartement ",categorie:'Location' , src:pc2 },
    { title: "Maison",categorie:'Location', src:pc1 },
    { title: "Maison",categorie:'Echange',  src:pc2  },
    { title: "Appartement ",categorie:'vente', src:pc3 },
    { title: "Appartement ",categorie:'Echange' ,src:pc3 },
    { title: "Appartement ",categorie:'vente' , src:pc2 },
    { title: "Maison ",categorie:'vente',src:pc1 },
    { title: "Appartement ",categorie:'Location' , src:pc2 },
    { title: "Maison",categorie:'Location', src:pc1 },
    { title: "Maison",categorie:'Echange',  src:pc2  },
    { title: "Appartement ",categorie:'vente', src:pc3 },
    { title: "Appartement ",categorie:'Echange' ,src:pc3 },
    { title: "Appartement ",categorie:'vente' , src:pc2 },
    
   
    ];
  return (
   
    <div className="flex flex-wrap   text-violet-text  sm:justify-center   ">
     {annonces.map((annonce, index) => (
    <div className="flex flex-col bg-gray-100 rounded-xl shadow-lg  m-4  p-1 hover:shadow-xl   overflow-hidden sm:w-52">
      <img  src={ ` ${annonce.src} `} />
        <h5 className="text-center font-bold px-2 py-3">{annonce.title}</h5>  

        <p className="text-center px-2 "> {annonce.categorie}</p>
        <div className='flex flex-row justify-between'>
        
        <div className='flex flex-row'>
        <BsCashCoin/><p>12500 DA</p>
        
        </div>
       
        </div>
        

        
        </div>
      )  )}
    </div>
  )
}

export default Annonce
/* 
<div className=' bg-slate-400  '>
        <img  src='' />
        <h5>Titre d'annonce </h5>
        <p>catégorie</p>
        <div  className='flex flex-row justify-between'>
       <div  className='flex flex-row'> <p>prix DA</p></div>
         <div   className='flex flex-row'><p>enregister</p></div>
        </div>

        
        </div>  

        */