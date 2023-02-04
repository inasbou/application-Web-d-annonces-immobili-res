import {React ,useState,useEffect}  from 'react' 
import { useLocation } from 'react-router-dom'
import MyAnnonce from '../Components/MesAnnonce/MyAnnonce';
import Navbar from '../Components/Navbar';

const MesAnnonces = (props) => {
    const location=useLocation();
   
    const data=location.state?.data;
    // console.log(data)

     const [annonces, setAnnonces] = useState([]);
      console.log(data[0])
     //////recuperer annonces //////
    useEffect(()=>{
      fetch(`http://127.0.0.1:5000/MesAnnonces/${data[0].id_user}`,{
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
    <div className='flex flex-col'>
         <Navbar/>
        <div>
    { (annonces.map((annonce) => (
    <div className="flex flex-row  text-violet-text  mt-16   ">
      <MyAnnonce
      id_annonce={annonce.id_annonce}
      categorie ={annonce.categorie}
      type_annonce ={ annonce.type_annonce}
      prix = {annonce.prix}
      
      /> </div>
    )) ) }
     </div>

    </div>
  )
}

export default MesAnnonces