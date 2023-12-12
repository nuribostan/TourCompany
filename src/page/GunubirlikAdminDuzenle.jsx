import React, { useContext, useEffect, useState } from "react";
import { TourContext } from "../Context/TourContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const GunubirlikAdminDuzenle = () => {
  const { changeId, changePhoto } = useContext(TourContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const tourRef = doc(db, "gunubirlikTours", changeId);
      const tourSnapshot = await getDoc(tourRef);
      const tourData = tourSnapshot.data();

      document.getElementById("tourName").value = tourData.tourName;
      document.getElementById("city").value = tourData.city;
      document.getElementById("desc").value = tourData.desc;
    };

    getData();
  }, [changeId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tourName = e.target.tourName.value;
    const city = e.target.city.value;
    const desc = e.target.desc.value;
    const photoURL = e.target.file.files[0];

    const storageRef = ref(storage, `tourImages/${tourName}`);

    if (photoURL instanceof File) {
      const desertRef = ref(storage, changePhoto);
      deleteObject(desertRef);
    }

    await uploadBytesResumable(storageRef, photoURL).then(() => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        const tourRef = doc(db, "gunubirlikTours", changeId);
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
    navigate("/admin-panel/gunubirlik");

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

export default GunubirlikAdminDuzenle;
