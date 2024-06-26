import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, imgSrc, text, buttonLink, buttonText }) => (
  <div
    className="flex-col md:flex-row p-8"
    style={{
      position: "relative",
      backgroundColor: "#F5F5F3", // Gray background color
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
    }}
  >
    <div
    className="flex justify-center items-center flex-col lg:justify-start lg:items-start"
      style={{
        maxWidth: "450px", // Adjust the maxWidth as needed
        marginRight: "10px", // Add margin between text/button and image
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem", // Adjust the font size as needed
          color: "#000", // Black color
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem", // Adjust the font size as needed
          color: "#666", // Gray color
        }}
      >
        {Subtext}
      </p>

      <Link to="/about">
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
    <div className="mt-4 w-64 md:w-96" style={{ marginLeft: "10px" }}>
      <Image imgSrc={imgSrc} />
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  const slides = [
    {
      imgSrc: "https://starkbrand.com.co/cdn/shop/products/43_c0af3705-bf6e-46ac-98f2-c3f83d60e39d.jpg?v=1651160267&width=1125",
      text: "Expresa tu esencia con estilo",
      Subtext:
        "Nuestras playeras únicas reflejan tu personalidad y autenticidad.",
      buttonLink: "/offer",
      buttonText: "Comprar",
    },
    {
      imgSrc: "https://starkbrand.com.co/cdn/shop/products/42_516ce4a0-9f11-4681-bb0e-17d04e500484.jpg?v=1683307147&width=1214",
      text: "Innovación y calidad en cada prenda",
      Subtext:
        "Descubre diseños exclusivos y materiales de alta calidad.",
      buttonLink: "/shop",
      buttonText: "Comprar",
    },
    {
      imgSrc: "https://starkbrand.com.co/cdn/shop/files/DSC04343.jpg?v=1683307147&width=1125",
      text: "Diseños frescos para jóvenes únicos",
      Subtext:
        "Capturamos la imaginación y esencia de la juventud en cada prenda.",
      buttonLink: "/contact",
      buttonText: "Comprar",
    },
  ];
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
