import React from "react";
import img from "../../images/img.jpg";
import rasm from "../../images/classmates/class.jpg";
import iftar from "../../images/classmates/iftar.jpg";
import namangan from "../../images/classmates/namangan.jpg";
import sumalak from "../../images/classmates/sumalak.jpg";
import travel from "../../images/classmates/travel.jpg";
import './images.css'

function Images() {
  const classmatesImages = [rasm, iftar, namangan, sumalak, travel];

  return (
    <div className="images-section">
      <div className="container mx-auto">
        <h2 className="main-title">Hayotimdagi eng zo'r lahzalar</h2>

        <div className="baby-photo-card">
          <h2 className="card-title">1 yoshligimdagi suratim</h2>
          <div className="photo-wrapper">
            <img src={img} alt="yoshligimdagi rasmim" className="photo" />
          </div>
        </div>

        <div className="classmates-card">
          <h2 className="card-title">
            Sinfdoshlarim bilan eng zo'r lahzalarim
          </h2>
          <h3 className="card-subtitle">10-A sinf hayotidan lavhalar</h3>

          <div className="images-grid">
            {classmatesImages.map((image, index) => (
              <div key={index} className="image-wrapper">
                <img
                  src={image}
                  alt={`classmates-${index}`}
                  className="photo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Images;
