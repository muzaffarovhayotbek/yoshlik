import React from "react";
import img from "../../images/img.jpg";
import rasm from "../../images/classmates/class.jpg";
import iftar from "../../images/classmates/iftar.jpg";
import namangan from "../../images/classmates/namangan.jpg";
import sumalak from "../../images/classmates/sumalak.jpg";
import travel from "../../images/classmates/travel.jpg";

function Images() {
  const classmatesImages = [rasm, rasm, iftar, namangan, sumalak, travel];

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Title */}
        <h2 className="text-[28px] text-center font-semibold mb-10">
          Hayotimdagi eng zo'r lahzalar
        </h2>

        <div className="max-w-[600px] mx-auto bg-white shadow-lg rounded-2xl p-5 mb-16">
          <h2 className="text-[24px] font-medium text-center mb-4">
            1 yoshligimdagi suratim
          </h2>

          <div className="flex justify-center">
            <img
              src={img}
              alt="yoshligimdagi rasmim"
              className="w-[200px] rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 max-w-[900px] mx-auto">
          <h2 className="text-[24px] font-semibold text-center mb-2">
            Sinfdoshlarim bilan eng zo'r lahzalarim
          </h2>

          <h3 className="text-[20px] text-center text-gray-600 mb-6">
            10-A sinf hayotidan lavhalar
          </h3>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {classmatesImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt={`classmates-${index}`}
                  className="w-full h-48 object-cover"
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
