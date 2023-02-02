import {React ,useState,useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import AnnonceDetails from '../Components/DetailsPage/AnnonceDetails'
import AnnonceurInfos from '../Components/DetailsPage/AnnonceurInfos'
import Navbar from '../Components/Navbar'

const DetailsPage = (props) => {
/*  const location = useLocation();
  const [details, setDetails] = useState([]);*/
  
  const [annonce, setAnnonce] = useState([]);
 
 useEffect(()=>{
   
  fetch(`http://127.0.0.1:5000/consultation/${props.id_annonce}`,{
     'methods':'GET',
     headers : {
       'Content-Type':'application/json'
     }
   })
   
   .then(response => response.json())
   .then(response => setAnnonce(response)) 
   .catch(error => console.log(error))
   console.log(annonce);

 },[])
  return (
    <div>
     
    <div className=' p-3 border-gray-300  m-3  rounded-xl border-2  flex flex-col lg:flex-row'>
     <div className='lg:w-1/2 m-4' >
     <AnnonceDetails
      
      categorie={annonce.categorie}
        type_annonce ={annonce.type_annonce}
        surface ={ annonce.surface}
        prix = {annonce.prix}
        commune ={ annonce.commune}
        description = {annonce.description}/>
      
    
     
     </div>
    
    </div>
      <AnnonceurInfos 
     fullname= {annonce.fullname}
     address={annonce.address}
     email={annonce.email}
     num_telephone={annonce.num_telephone}
     />
    </div>
  )
}

export default DetailsPage

/* <AnnonceurInfos 
      fullname= {user.fullname}
      address= {user.address}
      email= {user.email}
      num_telephone={user.num_telephone}
     />*/ 
/*  <AnnonceDetails
      
     />categorie={details.categorie}
       type_annonce ={details.type_annonce}
       surface ={ details.surface}
       prix = {details.prix}
       wilaya ={ details.wilaya}
       descriptionx = {details.description}

const DetailsPage = () => {
  const location = useLocation();
  const [details, setDetails] = useState([]);
  
  //////recuperer  lesdeails de l annonce //////
 useEffect(()=>{
   fetch(`http://127.0.0.1:5000/consultation/${location.state}`,{
     'methods':'GET',
     headers : {
       'Content-Type':'application/json'
     }
     
   })
   
   .then(response => response.json())
   .then(response => setDetails(response)) 
  .catch(error => console.log(error))
   console.log(details);
   

 },[])
  return (
    <div>
     <Navbar/>
    <div className=' p-3 border-gray-300  m-3  rounded-xl border-2  flex flex-col lg:flex-row'>
     <div className='lg:w-1/2 m-4' >
      <AnnonceDetails
       categorie={details.categorie}
       type_annonce ={details.type_annonce}
       surface ={ details.surface}
       prix = {details.prix}
       wilaya ={ details.wilaya}
       descriptionx = {details.description}

     /></div>
     <div className='bg-gray-300 h-96 lg:w-1/2 m-4 rounded-xl'>
      <p>hello</p>
     </div>
</div>
      <AnnonceurInfos/>
    </div>
  )
}

export default DetailsPage

*/ 