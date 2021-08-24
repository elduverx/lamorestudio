import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Nosotros",
      desc:
        "L'amore Studio es una empresa de modelaje webcam encargada de la produccion y entretenimiento para adultos.",
      img:
        "./assets/who1.png",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Instalaciones",
      desc:
        "Contamos con instalaciones de lujo con un diseño interior unico y extraordinario.",
      img:
        "./assets/cama.jpeg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Monitores",
      desc:
        "Contamos con un equipo profesional que siempre estara apoyando en tus transmisiones ",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduYqLPzO5T-LrZ7ZFqYJCGQE-wtdVBMNu3XX0fryIzwoU_5SoD0LmaDDZOUX4ZMY-ifA&usqp=CAU",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Apoyo",
      desc:
        "Un equipo de profesionales a tu disposición; entrenadores, seguimiento médico, soporte técnico, fotografía y edición.",
      img:
        "https://support.clip-studio.com/view/img/support/top.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span></span>
                </div>
              </div>
              <div className="right">
               <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}