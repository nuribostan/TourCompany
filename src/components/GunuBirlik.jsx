import React, { useEffect, useState } from "react";
import Button from "../share/Button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import GunubirlikTurlarData from "../data/GunubirlikTurlarData";

function GunuBirlik() {
  const [gunubirlikTurlar, setGunubirlikTurlar] = useState(GunubirlikTurlarData);

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
    <div className="gunuBirlik-container">
      <div className="gunuBirlik">
        <div className="gunuBirlik-title">
          <h1>Günübirlik</h1>
          <h2>turlar</h2>
        </div>

        <div className="gunuBirlik-content">
          {gunubirlikTurlar.map((gunubirlikTurlar, index) => {
            if (index >= 4) return null;
            return (
              <div className={`gunuBirlik-col gunuBirlik-col-${index + 1}`}>
                <div className="gunuBirlik-text">
                  <h1>{gunubirlikTurlar.title}</h1>
                  <h2>{gunubirlikTurlar.title2}</h2>
                  <small>{gunubirlikTurlar.desc}</small>
                </div>
                <img loading="lazy" src={gunubirlikTurlar.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <Button text={"Tümünü Gör"} />
    </div>
  );
}

export default GunuBirlik;
