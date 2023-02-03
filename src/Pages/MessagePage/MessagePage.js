import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import './msg.css';
import Navbar from '../../Components/Navbar';
const wilayas = [
  { value: "", label: "Wilaya.." },
  { value: "Alger", label: "Alger" },
  { value: "Biskra", label: "Biskra" },
  { value: "Souk Ahrass", label: "Souk Ahrass" },
  { value: "Tamanrasset", label: "Tamanrasset" },
  { value: "Médea", label: "Médea" },
];

const communes  = {
  Alger: [
    { value: "", label: "Commune.." },
    { value: "BAB EL OUED", label: "BAB EL OUED" },
    { value: "BARAKI", label: "BARAKI" },
    { value: "HYDRA", label: "HYDRA" },
    { value: "CHERAGA", label: "CHERAGA" },
    { value: "ROUIBA", label: "ROUIBA" },
    { value: "BAB EZZOUAR", label: "BAB EZZOUAR" },
    { value: "OUED SMAR", label: "OUED SMAR" },
  ],
  Biskra : [
    { value: "", label: "Commune.." },
    { value: "BISKRA", label: "BISKRA" },
    { value: "SIDI OKBA", label: "SIDI OKBA" },
    { value: "TOLGA", label: "TOLGA" },
    { value: "BRANIS", label: "BRANIS" },
    { value: "DOUCEN", label: "DOUCEN" },
  ],
  SoukAhrass : [
    { value: "", label: "Commune.." },
    { value: "SOUK AHRAS", label: "SOUK AHRAS" },
    { value: "DREA", label: "DREA" },
    { value: "TAOURA", label: "TAOURA" },
    { value: "SIDI FREDJ", label: "SIDI FREDJ" },
    { value: "KHEMISSA", label: "KHEMISSA" },
  ],
  Tamanrasset : [
    { value: "", label: "Commune.." },
    { value: "TAMANRASSET", label: "TAMANRASSET" },
    { value: "AIN SALAH", label: "AIN SALAH" },
    { value: " INGHAR", label: " INGHAR" },
  ],
  Médéa : [
    { value: "", label: "Commune.." },
    { value: " REBAIA", label: " REBAIA" },
    { value: "TAFRAOUT", label: "TAFRAOUT" },
    { value: " BAATA", label: "BAATA" },
    { value: "TAMESGUIDA", label: "TAMESGUIDA" },
    { value: " OUZERA", label: "OUZERA" },
    { value: "DJOUAB", label: "DJOUAB" },
    { value: "TABLAT", label: "TABLAT" },

  ],
};

const typee = [
  { value: "", label: "Type" },
  { value: "Terrain", label: "Terrain" },
  { value: "Terrain agricole", label: "Terrain Agricole" },
  { value: "Apartement", label: "Apartement" },
  { value: "Maison", label: "Maison" },
];
const CountryStateExample = () => {
  const [selectedWilaya, setSelectedWilaya] = useState("");
  const handleClick=()=>{
    console.log("hello") ;

  }
 
  return (
    <>
    <Navbar/>
    <div className="filtrage">
      <h3>Filtrez vos résultats</h3>
    <Formik
      initialValues={{wilaya: "", commune: "" , type :""}}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field as="select" name="wilaya" className="wilayafiltre" onClick={(e) => setSelectedWilaya(e.target.value)}
          >
            {wilayas.map((wilaya) => (
              <option key={wilaya.value} value={wilaya.value}>
                {wilaya.label}
              </option>
            ))}
          </Field>
          <Field as="select" name="commune" className="communefiltre" >
            {selectedWilaya ? communes[selectedWilaya].map((commune) => (
              <option key={commune.value} value={commune.value}>
                {commune.label}
              </option>
            )) : null }
          </Field>
      <Field as="select" name="type"  className="typefiltre">

        {
          typee.map((type) => (
            <option key ={type.value} value={type.value}>
              {type.label}
            </option>
          ))
        }
      </Field>
          <button type="submit" disabled={isSubmitting} onClick={handleClick} className="btnsubmit">
            Filtrer
          </button>
        </Form>
      )}
    </Formik>

    </div>
    </>
  );
};

export default CountryStateExample;
