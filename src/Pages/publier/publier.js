import React , {useState} from 'react'
import Navbar from '../../Components/Navbar'
import './publier.css'
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Formik, Form, Field } from 'formik';
import axios from "axios";
function Publier () {
  const categorie = [
  { value: "", label: "Catégories de l'annonce ... " },
  { value: "cat1", label: "Vente" },
  { value: "cat2", label: "Echange" },
  { value: "cat3", label: "Location" },
  { value: "cat4", label: "Location pour vaccances" },
];

const typee = [
  { value: "", label: "Type de l'annonce ... " },
  { value: "type1", label: "Terrain" },
  { value: "type2", label: "Terrain Agricole" },
  { value: "type3", label: "Apartement" },
  { value: "type4", label: "Maison" },
];
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setPreviewUrl(URL.createObjectURL(event.target.files[0]));
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", file);

    axios.post("/server/upload", formData).then((response) => {
      console.log(response.data);
    });
  };
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
      <div className="publier_inputs">
      <Formik
    initialValues={{ titre: '', categories: '' , type :'',surface :'', prix:'', lien :'' , wilaya:'', commune:'', description:'', condition:'' }}
    onSubmit={(values, actions ) => {
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
      <button  className="photobtn" >
         <FontAwesomeIcon icon={faPlusCircle}/> 
         <input style={{}} type="file" placeholder="Ajouter photos" onChange={handleFileChange} />
          Ajouter des photos
        </button>
        <div className="conditions">
        <Field type="checkbox" name="conditions"  className="cond"/>
        <p> J'accèpte que mes informations soient affichées parmi les détails de cet annonce </p>
        </div>
      <button onClick={handleUpload} className="publierbtn" type="submit" disabled={isSubmitting}>
      {previewUrl && <img src={previewUrl} alt="Preview" />}
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




