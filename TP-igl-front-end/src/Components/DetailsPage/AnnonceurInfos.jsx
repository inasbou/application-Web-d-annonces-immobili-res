import {React ,useState,useEffect} from 'react'

const AnnonceurInfos = (props) => {

  return (
    
   <div className=" m-4  lg:w-1/2   p-3 border-gray-300   rounded-xl border-2">
    <h1 className=" text-xl font-bold text-violet-text">A propos de l'annonceur</h1>
    <div className=" flex flex-row justify-between border-b border-gray-300 p-1">
      <p className=" font-bold">Nom et prenom</p> <p>{props.fullname}</p>
    </div>
    <div className=" flex flex-row  justify-between border-b border-gray-300 p-1">
      <p className=" font-bold">Adress</p>
      <p>{props.address}</p>
    </div>
    <div className=" flex flex-row  justify-between  border-b border-gray-300 p-1">
      <p className=" font-bold"> Adresse email  </p>
      <p>{props.email}</p>  
    </div>
    <div className=" flex flex-row  justify-between  border-b border-gray-300 p-1">
      <p className=" font-bold"> Numéro du téléphone  </p>
      <p>{props.num_telephone}</p>

    </div>
    <div className='flex justify-center p-4'>
    <button className=' bg-violet-btn rounded-xl text-white p-2'>envoyer un message</button>
    </div></div>
  )
}

export default AnnonceurInfos