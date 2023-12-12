import React from "react";
import NavigateBar from "../components/NavigateBar";
import Footer from "../components/Footer";
import "../assets/css/Konaklamalı.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function KonaklamalıTurlar() {
  const [konaklamali, setKonaklamali] = useState([]);

  useEffect(() => {
    const getTurlar = async () => {
      const querySnapshot = await getDocs(collection(db, "konaklamaliTours"));
      const turlarData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setKonaklamali(turlarData);
    };

    getTurlar();
  }, []);

  return (
    <div className="konaklamalı-container">
      <NavigateBar />
      <div className="about-title-2">
        <h1>Konaklamalı Turlar</h1>
      </div>

      <div className="gunuBirlik-container">
        <div className="gunuBirlik">
          <div className="gunuBirlik-title">
            <h1>Konaklamalı</h1>
            <h2>turlar</h2>
          </div>

          <div className="gunuBirlik-content">
            {konaklamali.map((konaklamali) => {
              return (
                <div className="gunuBirlik-col gunuBirlik-col-1">
                  <div className="gunuBirlik-text">
                    <h1>{konaklamali.city}</h1>
                    <h2>{konaklamali.tourName}</h2>
                    <small>{konaklamali.desc}</small>
                  </div>
                  <a href={konaklamali.link}>
                    <img
                      loading="lazy"
                      src={konaklamali.photoURL}
                      alt=""
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KonaklamalıTurlar;
