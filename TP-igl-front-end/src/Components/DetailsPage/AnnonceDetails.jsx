import React from "react";



const AnnonceDetails = (props) => {

  return (
    <div className="p-4 ">
      <h1 className=" text-xl font-bold text-violet-text">Titre de l'annonce</h1>
      <div className=" flex flex-row justify-between border-b border-gray-300 p-1">
        <p className=" font-bold">Catégorie de l'annonce </p> <p>{props.categorie}</p>
      </div>
      <div className=" flex flex-row  justify-between border-b border-gray-300 p-1">
        <p className=" font-bold">Date </p>
        <p> 30 Dec 2022</p>
      </div>
      <div className=" flex flex-row  justify-between  border-b border-gray-300 p-1">
        <p className=" font-bold">Type de l'immobilier </p>
        <p>{props.type_annonce}</p>
      </div>
      <div className=" flex flex-row justify-between  border-b border-gray-300 p-1">
        <p className=" font-bold">Prix </p>
        <p>{props.prix}</p>
      </div>
      <div className=" flex flex-row  justify-between border-b border-gray-300 p-1">
        <p className=" font-bold">Superficie </p> <p>{props.surface}m²</p>
      </div>
      <div className=" flex flex-row  justify-between border-b border-gray-300 p-1">
        <p className=" font-bold">Commune </p> <p>{props.commune} </p>
      </div>
          <div>
            <p className=" font-bold">Description</p>
            <p>{props.description} </p>
          </div>
    </div>
  );
};

export default AnnonceDetails;
