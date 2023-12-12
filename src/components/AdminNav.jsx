import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function AdminNav() {
  return (
    <div className="admin-nav">
      <div className="admin-logo">
        <img
          src="https://themewagon.github.io/pluto/images/layout_img/user_img.jpg"
          alt=""
        />
        <div className="admin-name">
          <p>Tunahan Yaşar Fıstık</p>
          <p>
            <span></span>Online
          </p>
        </div>
      </div>
      <div className="admin-menu">
        <div className="admin-menu-title">
          <p>General</p>
        </div>
        <ul>
          <li className="admin-turlar admin-gunubirlik">
            <img src="https://i.hizliresim.com/6k0q65o.png" alt="" />{" "}
            <a href="/admin-panel/gunubirlik">Günübirlik Turlar &#8250;</a>
          </li>
          <li className="admin-turlar admin-konaklama">
            <img src="https://i.hizliresim.com/173scg8.png" alt="" />{" "}
            <a href="/admin-panel/konaklamali">Konaklamalı Turlar &#8250;</a>
          </li>
          <li className="admin-turlar admin-yurtdisi">
            <img src="https://i.hizliresim.com/22mfj2d.png" alt="" />
            <a href="#">Yurtdışı Turlar &#8250; </a>
          </li>
        </ul>
      </div>

      <button onClick={() => signOut(auth)} className="admin-logOut">
        <img src="https://i.hizliresim.com/scownke.png" alt="" />
      </button>
    </div>
  );
}

export default AdminNav;
