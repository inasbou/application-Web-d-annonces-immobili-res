import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Navbar from '../Components/Navbar';
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
  const [image, setImage] = useState(null);

  return (
    <>
    <Navbar/>
    <Formik
      initialValues={{ titre: '', categories: '' , type :'',surface :'', prix:'', lien :'' , wilaya:'', commune:'', description:'', condition:'' , image: null }}
      onSubmit={(values, actions) => {
        // make a POST request to the backend with the image, name, and age data
        const formData = new FormData();
        formData.append("titre", values.titre);
        formData.append("categories", values.categories);
        formData.append("type", values.type);
        formData.append("surface", values.surface);
        formData.append("prix", values.prix);
        formData.append("lien", values.lien);
        formData.append("wilaya", values.wilaya);
        formData.append("commune", values.commune);
        formData.append("description", values.description);
        formData.append("condition", values.condition);
        formData.append("image", image);

        fetch("http://your-backend-url/upload-data", {
          method: "POST",
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            // handle the response from the server
            console.log(data);
            actions.setSubmitting(false);
          })
          .catch(error => {
            console.error(error);
            actions.setSubmitting(false);
          });
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
          <Field type="file" name="image" onChange={event => setImage(event.target.files[0])} />

          <button type="submit" disabled={isSubmitting} className="publierbtn" >
            Publier
          </button>
        </Form>
      )}
    </Formik>
  </>
  );
};

export default Publier;
