import React from "react";
import "../assets/css/About.css";
import NavigateBar from "../components/NavigateBar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about-container-2">
      <NavigateBar />
      <div className="about-title-2">
        <h1>Hakkımızda</h1>
      </div>

      <div className="about-content-2">
        <div className="about-content-2-left-col">
          <div className="about-content-2-title">
            <h1>Biz Kimiz ?</h1>
          </div>

          <div className="about-content-2-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ullam, at accusamus consectetur ab ipsum asperiores enim
              repudiandae mollitia perspiciatis facere illum sapiente
              consequatur itaque hic et reprehenderit veniam aperiam totam
              veritatis eveniet quas incidunt praesentium. Vero saepe
              perferendis dolorum veniam qui doloremque. Deleniti quaerat qui
              dolorem mollitia corporis minima aspernatur ducimus earum
              asperiores doloribus debitis repudiandae accusantium a inventore
              maiores, vel voluptatem, nisi possimus? Libero quis dolorem
              dolore, possimus maiores sunt sapiente modi temporibus et?
              Voluptatum ab officia voluptates corporis. Sed laborum itaque
              nesciunt, est similique cum quia atque, mollitia cupiditate
              tempora sit voluptatum saepe veniam quaerat? Minus incidunt ipsa
              sed, magnam quam modi omnis sint at facere, deleniti, laudantium
              fuga placeat voluptas ut? Nihil voluptatum accusantium quos vitae.
              Corporis nostrum modi exercitationem reprehenderit incidunt. Iure
              doloremque iste, quia nihil, nisi magni laborum, dignissimos
              veniam quod harum temporibus cupiditate? Rem, labore? Natus
              voluptatum excepturi quasi iure voluptas, adipisci nisi rerum
              corrupti impedit reprehenderit, ratione quod. Hic incidunt ut
              dolorem repellat harum sunt, vitae, alias blanditiis et odio
              corrupti ea sequi in neque fuga maxime eligendi reprehenderit
              laborum error quo asperiores assumenda? Vitae quis ab impedit,
              facere, autem beatae libero dolor consequatur dolorum repellendus
              pariatur dicta vel laudantium doloremque rerum?
            </p>
          </div>
        </div>

        <div className="about-content-2-right-col">
          <img src="https://img.imgyukle.com/2023/08/08/rU4gbR.webp" alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
