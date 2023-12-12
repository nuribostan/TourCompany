import React, { useEffect, useState } from "react";
import "../assets/css/GunubirlikTurlar.css";
import NavigateBar from "../components/NavigateBar";
import Footer from "../components/Footer";
import GunubirlikTurlarData from "../data/GunubirlikTurlarData";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Ayder from "../Tours/Ayder";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function GunubirlikTurlar() {
  const [gunubirlikTurlar, setGunubirlikTurlar] = useState([]);

  useEffect(() => {
    const getTurlar = async () => {
      const querySnapshot = await getDocs(collection(db, "gunubirlikTours"));
      const turlarData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGunubirlikTurlar(turlarData);
    };

    getTurlar();
  }, []);

  return (
    <div className="gunubirlikTurlar-container">
      <NavigateBar />
      <div className="about-title-2">
        <h1>Günübirlik Turlar</h1>
      </div>
      <div className="gunuBirlik-container">
        <div className="gunuBirlik">
          <div className="gunuBirlik-title">
            <h1>Günübirlik</h1>
            <h2>turlar</h2>
          </div>

          <div className="gunuBirlik-content">
            {gunubirlikTurlar.map((gunubirlikTurlar) => {
              return (
                <div className="gunuBirlik-col gunuBirlik-col-1">
                  <div className="gunuBirlik-text">
                    <h1>{gunubirlikTurlar.city}</h1>
                    <h2>{gunubirlikTurlar.tourName}</h2>
                    <small>{gunubirlikTurlar.desc}</small>
                  </div>
                  <a href={gunubirlikTurlar.link}>
                    <img loading="lazy" src={gunubirlikTurlar.photoURL} alt="" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />

      <Routes>
        <Route path="/ayder-turu" element={<Ayder />} />
      </Routes>
    </div>
  );
}

export default GunubirlikTurlar;
