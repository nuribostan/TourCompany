import React from 'react'
import "../assets/css/GunubirlikTurlar.css";
import NavigateBar from "../components/NavigateBar";
import Footer from "../components/Footer";

function YurtdışıTurlar() {
  return (
    <div className="gunubirlikTurlar-container">
      <NavigateBar />
      <div className="about-title-2">
        <h1>Yurtdışı Turlar</h1>
      </div>
      <div className="gunuBirlik-container">
        <div className="gunuBirlik">
          <div className="gunuBirlik-title">
            <h1>Yurtdışı</h1>
            <h2>turlar</h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default YurtdışıTurlar