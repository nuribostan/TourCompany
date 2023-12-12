import React, { useContext, useEffect } from "react";
import { TourContext } from "../Context/TourContext";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

const KonaklamaliDuzenle = () => {
  const { changeId, changePhoto } = useContext(TourContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getTurlar = async () => {
      const tourRef = doc(db, "konaklamaliTours", changeId);
      const docSnap = await getDoc(tourRef);
      const data = docSnap.data();

      document.getElementById("tourName").value = data.tourName;
      document.getElementById("city").value = data.city;
      document.getElementById("desc").value = data.desc;
    };

    getTurlar();
  }, [changeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tourRef = doc(db, "konaklamaliTours", changeId);
    const tourName = e.target.tourName.value;
    const city = e.target.city.value;
    const desc = e.target.desc.value;
    const photoURL = e.target.file.files[0];

    const tourData = {
      tourName,
      city,
      desc,
      photoURL: changePhoto,
    };

    const storageRef = ref(storage, `konaklamaliImages/${tourName}`);
    const desertRef = ref(storage, changePhoto);
    deleteObject(desertRef);

    await uploadBytesResumable(storageRef, photoURL).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        const tourRef = doc(db, "konaklamaliTours", changeId);
        await updateDoc(tourRef, {
          tourName: tourName,
          city: city,
          desc: desc,
          photoURL: downloadURL,
        });
      });
    });

    e.target.tourName.value = "";
    e.target.city.value = "";
    e.target.desc.value = "";
    e.target.file.value = "";

    window.alert("Tur başarıyla düzenlendi");
    navigate("/admin-panel/konaklamali");
  };

  return (
    <div className="add-new-tour-container">
      <h1 className="add-new-tour-title">Düzenle</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="tourName">Tur Adı</label>
          <input type="text" id="tourName" placeholder="Ayder" />
        </div>

        <div className="input-field">
          <label htmlFor="city">Bulunduğu Şehir</label>
          <input type="text" id="city" placeholder="Rize" />
        </div>

        <div className="input-field">
          <label htmlFor="desc">Açıklama</label>
          <textarea id="desc" placeholder="Çok güzel bir tur" />
        </div>

        <div className="input-field">
          <label htmlFor="file">Tura Ait Resim</label>
          <input id="file" type="file" />
        </div>

        <button type="submit">Düzenle</button>
      </form>
    </div>
  );
};

export default KonaklamaliDuzenle;
