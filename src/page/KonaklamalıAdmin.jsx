import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase";
import { deleteObject, ref } from "firebase/storage";
import { TourContext } from "../Context/TourContext";

function KonaklamalıAdmin() {
  const navigate = useNavigate();
  const [turlar, setTurlar] = useState([]);
  const [error, setError] = useState(false);
  const { setChangeId, setChangePhoto } = useContext(TourContext);

  useEffect(() => {
    const getTurlar = async () => {
      const querySnapshot = await getDocs(collection(db, "konaklamaliTours"));
      const turlarData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTurlar(turlarData);
    };

    try {
      getTurlar();
    } catch (error) {
      setError(true);
    }
  });

  const handleDelete = async (konaklamaliId, photoURL) => {
    if (window.confirm("Silmek istediğinize emin misiniz?") === false) return;
    try {
      const tourRef = doc(db, "konaklamaliTours", konaklamaliId);
      deleteDoc(tourRef);
      const desertRef = ref(storage, photoURL);
      deleteObject(desertRef);

      setTurlar((prevTurlar) =>
        prevTurlar.filter((tur) => tur.id !== konaklamaliId)
      );
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (konaklamaliId, photoURL) => {
    setChangeId(konaklamaliId);
    setChangePhoto(photoURL);
    navigate("/admin-panel/konaklamali/tur-duzenle");
  }

  return (
    <div className="konaklamalı-admin-container">
      <h1 className="konaklamalı-admin-title">Konaklamalı Turlar</h1>
      <button
        onClick={() => {
          navigate("/admin-panel/konaklamali/yeni-tur-ekle");
        }}
        className="konaklamalı-admin-button"
      >
        Yeni Tur Ekle
      </button>

      <div className="konaklamalı-admin-table">
        <ul>
          {turlar.map((tur, index) => (
            <li>
              <p>{index + 1}</p>
              <div className="table-field">
                <p>{tur.tourName}</p>
                <div className="operations">
                  <button className="edit-button"
                  onClick={() => handleChange(tur.id, tur.photoURL)}
                  >Düzenle</button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(tur.id, tur.photoURL)}
                  >
                    Sil
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default KonaklamalıAdmin;
