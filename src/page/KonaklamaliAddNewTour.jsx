import { doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { db } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc } from 'firebase/firestore';
import { storage } from '../firebase';
import { useNavigate } from 'react-router-dom';



const KonaklamaliAddNewTour = () => {

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tourName = e.target.tourName.value;
    const city = e.target.city.value;
    const desc = e.target.desc.value;
    const photoURL = e.target.file.files[0];
    const id = uuidv4().slice(0, 8);

    try {
      const storageRef = ref(storage, `konaklamaliImages/${tourName}`);
      await uploadBytesResumable(storageRef, photoURL);
      getDownloadURL(storageRef).then(async (downloadURL) => {
        const tourData = {
          id: id,
          tourName,
          city,
          desc,
          photoURL: downloadURL,
        }

        const docRef = doc(db, "konaklamaliTours", id);
        await setDoc(docRef, tourData);
      })
  
    } catch (error) {
      setError(true);
    }

    e.target.tourName.value = "";
    e.target.city.value = "";
    e.target.desc.value = "";
    e.target.file.value = "";

    window.alert("Tur başarıyla eklendi");
    navigate("/admin-panel/konaklamali");
  }


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
          <textarea id="desc"  />
        </div>

        <div className="input-field">
          <label htmlFor="file">Tura Ait Resim</label>
          <input id="file" type="file" />
        </div>

        <button type="submit">Ekle</button>
        {error && <p className="error">Bir hata oluştu</p>}
      </form>
    </div>
  )
}

export default KonaklamaliAddNewTour