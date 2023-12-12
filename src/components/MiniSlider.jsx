import React, { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import MiniSliderPhotoData from "../data/MiniSliderPhotoData";

const MiniSlider = () => {
  const [turlar, setTurlar] = useState(MiniSliderPhotoData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? turlar.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === turlar.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="miniSlider">
      <div className="overlay-title">
        <h1>Konaklamalı</h1>
        <h2>Turlar</h2>
      </div>
      <div className="mini-slider-container">
        <div className="mini-slider-header">
          <h2 className="mini-slider-title">Popüler Bölgeler</h2>
          <div className="mini-slider-buttons">
            <button className="mini-slider-prev" onClick={handlePrev}>
              <img src="https://i.hizliresim.com/h0kstup.png" alt="" />
            </button>
            <button className="mini-slider-next" onClick={handleNext}>
              <img src="https://i.hizliresim.com/3v86l0j.png" alt="" />
            </button>
          </div>
        </div>

        <div className="mini-slider-space"></div>
        <div className="mini-slider-content">
          <div
            className="mini-slider-images"
            style={{ transform: `translateX(-${currentIndex * 550}px)` }}
          >
            {turlar.map((image, index) => (
              <div
                className="image-box"
                key={index}
                style={{ marginLeft: index !== 0 ? "10px" : 0 }}
              >

                <img
                  src={image.img}
                  alt={`Resim ${index + 1}`}
                  className={
                    index === currentIndex
                      ? "mini-slider-image active"
                      : "mini-slider-image"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniSlider;
