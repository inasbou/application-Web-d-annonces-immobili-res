import React, { useState, useEffect  } from "react";
import Annonce from '../Components/MainPage/Annonce'
import Footer from '../Components/MainPage/Footer'
import Navbar from '../Components/Navbar/Navbar'

const MainPage = () => {
  const [annonces, setAnnonces] = useState([]);
  
   //////recuperer annonces //////
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/AllAnnonces',{
      'methods':'GET',
      headers : {
        'Content-Type':'application/json'
      }
    })
    
    .then(response => response.json())
    .then(response => setAnnonces(response)) 
   .catch(error => console.log(error))
    console.log(annonces);

  },[])


  


  return (
    <div>
    
  
      <Navbar/>
          
  { (annonces.map((annonce) => (
    <div className="flex flex-row  text-violet-text     ">
      <Annonce
      id_annonce={annonce.id_annonce}
      categorie ={annonce.categorie}
      type_annonce ={ annonce.type_annonce}
      prix = {annonce.prix}
      photo = {annonce.photo}
      /> </div>
    )) ) }
     
      <Footer/>
      </div>
  )
}

export default MainPage

/*useEffect(() => {
  fetch("/AllAnnonce").then((res) =>

{
setAnnonces(res.data);
console.log(annonces);
})
.catch((e) => {
console.log(e);
});
}, []);
/*
  const [data, setData] = useState({
    categorie :"",
    type_annonce :"" ,
    surface :0,
    description :"",
    prix :0,
    wilaya :"",
    commune :"",
    adresse :"",
    photo :""
  }
  );
  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/annonce/1").then((res) =>
        res.json().then((data) => {
            // Setting a data from api
            setData({
              categorie :data.categorie ,
              type_annonce : data.type_annonce,
              surface : data.surface,
              description : data.description,
              prix : data.prix,
              wilaya : data.wilaya,
              commune : data.commune,
              adresse : data.adresse,
              photo : data.photo
            });
        })
    );
}, []);
console.log(data);*/