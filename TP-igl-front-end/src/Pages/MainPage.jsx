import React, { useState, useEffect } from "react";
import Annonce from "../Components/MainPage/Annonce";
import Filter from "../Components/MainPage/Filter";
import Footer from "../Components/MainPage/Footer";
import Navbar from "../Components/Navbar";

const MainPage = () => {
  const [annonces, setAnnonces] = useState([]);
  const [Loading, setLoading] = useState(true);
  //////recuperer annonces //////
  useEffect(() => {
    fetch("http://127.0.0.1:5000/AllAnnonces", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setAnnonces(response))
      .then(setLoading(false))

      .catch((error) => console.log(error));
  }, []);
  /*
  useEffect(() => {
    setCurrentAnnonces(
      annonces.slice(0,18)
    );
    

  }, []);
  console.log(currentAnnonces)
    
   */
  if (Loading) return <div>Loading .....</div>;
  else
    return (
      <div>
        <Navbar annonces={annonces} setAnnonces={setAnnonces} />
        <div className="flex flex-col gap-6">
          <div className="mt-12">
            <Filter />
          </div>
          <div className="flex flex-wrap  gap-6 mt-48 m-5 justify-center ">
            {annonces.map((annonce) => (
              <Annonce
                titre={annonce.titre}
                id_annonce={annonce.id_annonce}
                categorie={annonce.categorie}
                type_annonce={annonce.type_annonce}
                prix={annonce.prix}
                photo={annonce.photo}
              />
            ))}{" "}
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default MainPage;
