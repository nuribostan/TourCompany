import React from "react";
import Button from "../share/Button";

function MiniAbout() {
  return (
    <div className="mini-about-container">
      <div className="mini-about-content">
        <div className="mini-about-col">
          <div className="about-title">
            <h4>2023</h4>
            <h2>Hakkımızda</h2>
            <h4>Çayeli Turizm</h4>
          </div>

          <div className="about-text">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus earum sit laudantium, quas fugit ex debitis vel.
              Explicabo, nisi ea. Dignissimos quis rerum aliquid perspiciatis
              beatae exercitationem explicabo vitae sapiente.
            </p>
          </div>

          <Button text={'Daha Fazla'}/>
        </div>
        <svg id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <clipPath id="blob">
            <path fill="#474bff" d="M432,282Q414,324,394,366Q374,408,332.5,435.5Q291,463,246,436.5Q201,410,152.5,410.5Q104,411,79.5,370Q55,329,37,284.5Q19,240,27.5,191Q36,142,80.5,119Q125,96,162,77.5Q199,59,246,33Q293,7,329.5,44.5Q366,82,399,115Q432,148,441,194Q450,240,432,282Z" />
          </clipPath>
        </defs>
        <image x={0} y={0} width="100%" height="100%" clipPath="url(#blob)" xlinkHref="https://i.hizliresim.com/3bloy2o.jpg" preserveAspectRatio="xMidYMid slice" />
      </svg>
      </div>
    </div>
  );
}

export default MiniAbout;
