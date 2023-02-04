import React , {useState,useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import './publier.css'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
function Publier () {
  const [user, setUser] = useState([]);

  
  //////recuperer annonces //////
 useEffect(()=>{
   fetch('http://127.0.0.1:5000/Current_User',{
     'methods':'GET',
     headers : {
       'Content-Type':'application/json'
     }
   })
   
   .then(response => response.json())
   .then((data)=> setUser(data));
  //  .then(response => setUser(response)) 
  // .catch(error => console.log(error))
   console.log(user);
  

 },[]) ;


  const categorie = [
  { value: "", label: "Catégories de l'annonce ... " },
  { value: "Vente", label: "Vente" },
  { value: "Echange", label: "Echange" },
  { value: "Location", label: "Location" },
  { value: "Location pour vaccances", label: "Location pour vaccances" },
];

const typee = [
  { value: "", label: "Type de l'annonce ... " },
  { value: "Terrain", label: "Terrain" },
  { value: "Terrain Agricole", label: "Terrain Agricole" },
  { value: "Apartement", label: "Apartement" },
  { value: "Maison", label: "Maison" },
];

  return (
    <>
    <Navbar/>
    <div className="publier">
    <div className="close">
          <button
          >
            X
          </button>
    </div> 
    { (user.map((userr) => ( <div>
      <div className="publier_inputs">
      <Formik
    initialValues={{  titre: '' , categories: '' , type :'',surface :'', prix:'', lien :'' , wilaya:'', commune:'', description:''  }}
    onSubmit={(values, actions ) => {
      setTimeout(async () => {
        const response = await axios.post(`http://localhost:5000/annonces/${userr.id_user}`, values);
        console.log(response.data);
        alert(JSON.stringify(values, null, 10));
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isSubmitting }) => (
    <Form>
      <Field type="text" name="titre" placeholder="Titre de l'annonce " className="titre" />
      <Field as="select" name="categories"  className="categories">
          {categorie.map((categories) => (
            <option key={categories.value} value={categories.value}>
              {categories.label}
            </option>
          ))}
      </Field>
      <Field as="select" name="type"  className="type">

        {
          typee.map((type) => (
            <option key ={type.value} value={type.value}>
              {type.label}
            </option>
          ))
        }
      </Field>
      <Field type="text" name="surface" placeholder="Surface" className="surface"/>
      <Field type="text" name="prix" placeholder="Le prix" className="prix"/>
      <Field type="url" name="lien" placeholder="Lien de la localisation sur Google Map" className="lien"/>
      <Field type="text" name="wilaya" placeholder="Wilaya" className="wilaya"/>
      <Field type="text" name="commune" placeholder="Commune"className="commune"/>
      <Field type="text" name="description" placeholder="Description..." className="description"/>
        <div className="conditions">
        <Field type="checkbox" name="conditions"  className="cond"/>
        <p> J'accèpte que mes informations soient affichées parmi les détails de cet annonce </p>
        </div>
      <button  className="publierbtn" type="submit" disabled={isSubmitting}>
  
      Publier
      </button>
    </Form>
  )}
</Formik>
      </div></div>)) ) }
    </div>
    
    </>
  )
}

export default Publier


/*from flask import Flask, request
app = Flask(__name__)
@app.route("/api", methods=["POST"])
def api():
    data = request.get_json()
    name = data["name"]
    email = data["email"]
    # Process the form data here
    return {"response": f"Received form data: Name={name}, Email={email}"}
if __name__ == "__main__":
    app.run(debug=True)
*/
