import React  from 'react'
import Navbar from '../../Components/Navbar'
import './publier.css'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
function publier () {
  return (
    <>
     
    <div className="publier">
    <div className="close">
          <button
          >
            X
          </button>
    </div> 
      <div className="publier_inputs">
      <Formik
    initialValues={{ titre: '', categories: '' , type :'',surface :'', prix:'', lien :'' , wilaya:'', commune:'', description:'', condition:'' }}
    onSubmit={(values, actions) => {
      setTimeout(async () => {
        const response = await axios.post("http://localhost:5000/api", values);
        console.log(response.data);
        alert(JSON.stringify(values, null, 10));
        actions.setSubmitting(false);
      }, 1000);
    }}
  >
    {({ isSubmitting }) => (
    <Form>
      <Field type="text" name="titre" placeholder="Titre de l'annonce " className="titre" />
      <Field type="text" name="categories" placeholder="Catégorie de l'annonce" className="categories"/>
      <Field type="text" name="type" placeholder="Type du bien immobilier" className="type"/>
      <Field type="text" name="surface" placeholder="Surface" className="surface"/>
      <Field type="text" name="prix" placeholder="Le prix" className="prix"/>
      <Field type="url" name="lien" placeholder="Lien de la localisation sur Google Map" className="lien"/>
      <Field type="text" name="wilaya" placeholder="Wilaya" className="wilaya"/>
      <Field type="text" name="commune" placeholder="Commune"className="commune"/>
      <Field type="text" name="description" placeholder="Description..." className="description"/>
      <button className="photobtn">
         <FontAwesomeIcon icon={faPlusCircle}/> 
          Ajouter des photos
        </button>
        <div className="conditions">
        <Field type="checkbox" name="conditions"  className="cond"/>
        <p> J'accèpte que mes informations soient affichées parmi les détails de cet annonce </p>
        </div>
      <button className="publierbtn" type="submit" disabled={isSubmitting}>
      Publier
      </button>
    </Form>
  )}
</Formik>
      </div>
    </div>
    
    </>
  )
}

export default publier


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




