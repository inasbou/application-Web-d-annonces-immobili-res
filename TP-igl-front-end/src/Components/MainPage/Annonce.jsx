import React, { useState, useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";
import pc1 from "../../assets/pic1.png";
import pc2 from "../../assets/pic2.png";
import pc3 from "../../assets/pic3.png";
import Modal from "react-modal";
import DetailsPage from "../../Pages/DetailsPage";

const Annonce = (props) => {
  const [image, setImage] = useState([]);
  
  //////recuperer annonces //////
 useEffect(()=>{
   fetch(`http://127.0.0.1:5000/recuper/${props.id_annonce}`,{
     'methods':'GET',
     headers : {
       'Content-Type':'application/json'
     }
   })
   
   .then(response => response.json())
   .then(response => setImage(response)) 
  .catch(error => console.log(error))
   console.log(image);

 },[])



  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    
      <div className="flex flex-col bg-gray-100 rounded-xl shadow-lg  m-4  p-1 hover:shadow-xl   overflow-hidden sm:w-52">
        <h5 className="text-center font-bold px-2 py-3">
          {props.type_annonce}
        </h5>
        <p >C:/Users/DELL/Desktop/Anime/${image.name}`</p> 
         
        <p className="text-center px-2 "> {props.categorie}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <BsCashCoin />
            <p>{props.id_annonce}</p>
            <button onClick={openModal}>details</button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={closeModal}>close</button>

              <div>
                <DetailsPage id_annonce={props.id_annonce} src={image.name} />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    
  );
};

export default Annonce;
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
