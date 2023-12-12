import React, { useState } from "react";
import { storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function AddNewTour() {
  const [error, setError] = useState(false);
  const [tourId, setTourId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tourName = e.target.tourName.value;
    const city = e.target.city.value;
    const desc = e.target.desc.value;
    const photoURL = e.target.file.files[0];
    const newTourId = uuidv4().slice(0, 8);

    setTourId(newTourId);


    try {
      const storageRef = ref(storage, `tourImages/${tourName}`);
      await uploadBytesResumable(storageRef, photoURL).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          const tourData = {
            id: newTourId,
            tourName,
            city,
            desc,
            photoURL: downloadURL,
          };

          const docRef = doc(db, "gunubirlikTours", newTourId);
          await setDoc(docRef, tourData);
        });
      });
    } catch (error) {
      setError(true);
    }

    e.target.tourName.value = "";
    e.target.city.value = "";
    e.target.desc.value = "";
    e.target.file.value = "";

    window.alert("Tur başarıyla eklendi");
    navigate("/admin-panel/gunubirlik");
  };
  return (
    <div className="add-new-tour-container">
      <h1 className="add-new-tour-title">Yeni Tur Ekle</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="tourName">Tur Adı</label>
          <input type="text" id="tourName"  />
        </div>

        <div className="input-field">
          <label htmlFor="city">Bulunduğu Şehir</label>
          <input type="text" id="city" />
        </div>

        <div className="input-field">
          <label htmlFor="desc">Açıklama</label>
          <textarea id="desc"/>
        </div>

        <div className="input-field">
          <label htmlFor="file">Tura Ait Resim</label>
          <input id="file" type="file" />
        </div>

        <button type="submit">Ekle</button>

        {error && <p className="error">Bir hata oluştu</p>}
      </form>
    </div>
  );
}

export default AddNewTour;
