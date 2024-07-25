import React from "react";
import image1 from "../assets/portfolio/gesture_car.png";
import image2 from "../assets/portfolio/digit_recognition.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: image1,
      title: "Gesture Controlled Car",
      description: "Developed a car that can be controlled using hand gestures."
    },
    {
      id: 2,
      src: image2,
      title: "Handwriting Digit Recognition",
      description: "Created a web application for recognizing handwritten digits using machine learning."
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center flex-col">
                <p className="text-xl font-bold">{title}</p>
                <p className="text-md">{description}</p>
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
