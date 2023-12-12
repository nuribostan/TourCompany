import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavigateBar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [showTourOptions, setShowTourOptions] = useState(false);

  const tourOptions = [
    { id: 1, name: "Günübirlik Turlar", link: "/gunubirlik-turlar" },
    { id: 2, name: "Yurtdışı Turlar", link: "/yurtdisi-turlar" },
    { id: 3, name: "Konaklamalı Turlar", link: "/konaklamali-turlar" },
  ];

  const handleShowTourOptions = () => {
    setShowTourOptions(!showTourOptions);
  };

  useEffect(() => {
    const responsiveMenu = document.querySelector(".responsive-item img");
    const navigateItems = document.querySelector(".navigate-items");

    responsiveMenu.addEventListener("click", () => {
      const navigateItems = document.querySelector(".navigate-item-box");
      navigateItems.classList.toggle("menu-active");
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goToHomePage(event) {
    event.preventDefault();
    window.location.href = "/";
  }

  return (
    <div
      className={`navigateBar-container ${showNavbar ? "" : "hidden"} ${
        isNavbarScrolled ? "scrolled" : ""
      }`}
    >
      <div className="navigate">
        <div className={`navigate-items ${isNavbarScrolled ? "scrolled" : ""}`}>
          <p className="logo1">
            <Link to="/">
              <img src="https://i.hizliresim.com/hkwums8.png" alt="" />
            </Link>
          </p>
          <div className="navigate-item-box">
            <div className="navigate-item">
              <a href="/">Anasayfa</a>
            </div>
            <div className="navigate-item">
              <a href="/hakkimizda">Hakkımızda</a>
            </div>
            <div
              className={`navigate-item turlar ${
                showTourOptions ? "active" : ""
              }`}
              onMouseEnter={handleShowTourOptions}
              onMouseLeave={handleShowTourOptions}
            >
              Turlar
              {showTourOptions && (
                <div className="tour-options">
                  {tourOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`tour-option ${
                        isNavbarScrolled ? "scrolled" : ""
                      }`}
                    >
                      &#8827; <a href={option.link}>{option.name}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="navigate-item">İletişim</div>
          </div>

          <div className="responsive-item">
            <img src="https://i.hizliresim.com/h15kqb4.png" alt="" />
          </div>
        </div>

        <div
          className={`navigate-button ${isNavbarScrolled ? "scrolled" : ""}`}
        >
          <img
            src={`${
              isNavbarScrolled
                ? "https://i.hizliresim.com/699t3uz.png"
                : "https://i.hizliresim.com/esac5dt.png"
            }`}
            alt=""
          />
          <p>İletişim</p>
        </div>
      </div>
    </div>
  );
}

export default NavigateBar;
