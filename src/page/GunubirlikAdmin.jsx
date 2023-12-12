import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase";
import { TourContext } from "../Context/TourContext";
import { deleteObject, ref } from "firebase/storage";

function GunubirlikAdmin() {
  const [turlar, setTurlar] = React.useState([]);
  const navigate = useNavigate();
  const { changeId, setChangeId, changePhoto, setChangePhoto } =
    useContext(TourContext);

  useEffect(() => {
    const getTurlar = async () => {
      const querySnapshot = await getDocs(collection(db, "gunubirlikTours"));
      const turlarData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTurlar(turlarData);
    };

    getTurlar();
  }, []);

  const handleDelete = async (gunubirlikId, photoURL) => {
    if(window.confirm("Silmek istediğinize emin misiniz?") === false) return;

    try {
      await deleteDoc(doc(db, "gunubirlikTours", gunubirlikId));
      const desertRef = ref(storage, photoURL);

      deleteObject(desertRef);

      console.log("gunubirlikId", gunubirlikId);

      setTurlar((prevTurlar) =>
        prevTurlar.filter((tur) => tur.id !== gunubirlikId)
      );
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  const handleChange = (gunubirlikId, photoURL) => {
    setChangeId(gunubirlikId);
    setChangePhoto(photoURL);
    navigate("/admin-panel/gunubirlik/duzenle");
  };

  return (
    <div className="gunubirlik-admin-container">
      <h1 className="gunubirlik-admin-title">Günübirlik Turlar</h1>
      <button
        onClick={() => {
          navigate("/admin-panel/gunubirlik/yeni-tur-ekle");
        }}
        className="gunubirlik-admin-button"
      >
        Yeni Tur Ekle
      </button>

      <div className="gunubirlik-admin-table">
        <ul>
          {turlar.map((tur, index) => (
            <li>
              <p>{index + 1}</p>
              <div className="table-field">
                <p>{tur.tourName}</p>
                <div className="operations">
                  <button
                    onClick={() => handleChange(tur.id, tur.photoURL)}
                    className="edit-button"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={() => handleDelete(tur.id, tur.photoURL)}
                    className="delete-button"
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

export default GunubirlikAdmin;
