
import React, { createContext, useState } from "react";

export const TourContext = createContext();

export const TourProvider = ({ children }) => {
  const [gunubirlikId , setGunubirlikId] = useState("");
  const [konaklamalıId , setKonaklamalıId] = useState("");
  const [yurtDışıId , setYurtDışıId] = useState("");

  const [changeId , setChangeId] = useState("");
  const [changePhoto , setChangePhoto] = useState("");

  return (
    <TourContext.Provider value={{ gunubirlikId, setGunubirlikId, konaklamalıId, setKonaklamalıId, yurtDışıId, setYurtDışıId, changeId, setChangeId, changePhoto, setChangePhoto}}>
      {children}
    </TourContext.Provider>
  );
};
