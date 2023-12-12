import React from "react";
import AdminNav from "../components/AdminNav";
import GunubirlikAdmin from "./GunubirlikAdmin";
import { Router, Routes, Route } from "react-router-dom";
import GunuBirlikAddNewTour from "./GunuBirlikAddNewTour";
import KonaklamalıAdmin from "./KonaklamalıAdmin";
import GunubirlikAdminDuzenle from "./GunubirlikAdminDuzenle";
import KonaklamaliAddNewTour from "./KonaklamaliAddNewTour";
import KonaklamaliDuzenle from "./KonaklamaliDuzenle";

function AdminPanel() {

  
  return (
    <div className="admin-container">
        <AdminNav />
        <Routes>
          <Route path="/gunubirlik/*" element={<GunubirlikAdmin />} />
          <Route path="/gunubirlik/yeni-tur-ekle" element={<GunuBirlikAddNewTour />} />
          <Route path="/gunubirlik/duzenle" element={<GunubirlikAdminDuzenle />} />
          <Route path="/konaklamali" element={<KonaklamalıAdmin />} />
          <Route path="/konaklamali/yeni-tur-ekle" element={<KonaklamaliAddNewTour />} />
          <Route path="/konaklamali/tur-duzenle" element={<KonaklamaliDuzenle />} />
        </Routes>
    </div>
  );
}

export default AdminPanel;
