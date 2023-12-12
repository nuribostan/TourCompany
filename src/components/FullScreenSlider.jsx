import React, { useEffect, useState } from "react";
import sliderPhotos from "../data/sliderPhoto";

const FullScreenSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % sliderPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? sliderPhotos.length - 1 : currentSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {sliderPhotos.map((photo, index) => (
        <div
          className={`slide ${index === currentSlide ? "active" : ""}`}
          key={photo.id}
        >
          <div className="slider-image">
            <img src={photo.src} alt={photo.alt} />
            <div className="image-text">
              <h1 className="photo-title">{photo.title}</h1>
              <p className="photo-desc">{photo.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FullScreenSlider;
