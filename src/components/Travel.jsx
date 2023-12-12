import React from "react";

function Travel() {
  return (
    <div className="travel-container">
      <div className="travel-left-col">
        <svg
          id="10015.io"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath id="blob">
              <path
                fill="#474bff"
                d="M432,282Q414,324,394,366Q374,408,332.5,435.5Q291,463,246,436.5Q201,410,152.5,410.5Q104,411,79.5,370Q55,329,37,284.5Q19,240,27.5,191Q36,142,80.5,119Q125,96,162,77.5Q199,59,246,33Q293,7,329.5,44.5Q366,82,399,115Q432,148,441,194Q450,240,432,282Z"
              />
            </clipPath>
          </defs>
          <image
            x={0}
            y={0}
            width="100%"
            height="100%"
            clipPath="url(#blob)"
            xlinkHref="https://i.hizliresim.com/3bloy2o.jpg"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      <div className="travel-right-col">
        <div className="travel-title">
          <h4>Seyehat Planlayıcı</h4>
          <h1>Seyahatinizi Bizimle Planlayın !</h1>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum maiores
          repudiandae molestias culpa in itaque doloribus? Non vitae fugit nam
          ipsa, iste cumque fugiat. Tenetur reprehenderit veritatis laboriosam
          sapiente aut!
        </p>

        <div className="travel-choice">
          <div className="travel-choice-content">
            <img src="https://i.hizliresim.com/jr8s35p.png" alt="" />
            <p>Yurt İçi Ve Yurt Dışı Kültürel Tur Hizmeti.</p>
          </div>
          <div className="travel-choice-content">
            <img src="https://i.hizliresim.com/jr8s35p.png" alt="" />
            <p>Ulaşımdan Konaklamaya çeşitli tatil paketleri.</p>
          </div>
          <div className="travel-choice-content">
            <img src="https://i.hizliresim.com/jr8s35p.png" alt="" />
            <p>Grup Sayısına Göre Özel VIP Araçlar.</p>
          </div>
             <div className="travel-choice-content">
            <img src="https://i.hizliresim.com/jr8s35p.png" alt="" />
            <p>Transfer ve Taşımacılık Hizmetleri.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
