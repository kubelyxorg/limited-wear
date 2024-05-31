import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Nosotros" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Limited Wear
          </span>{" "}
          es una empresa que distingue por su dedicación en la creación de
          playeras únicas y exclusivas. Con diseños que capturan la imaginación
          y esencia de los jóvenes, convirtiendo cada prenda en una expresión
          personal. Bienvenidos a un mundo donde la moda se fusiona con la
          individualidad.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Visión</span>{" "}
          ser la marca líder en moda juvenil, reconocida por nuestra innovación,
          calidad y estilo en la venta de playeras y camisas, inspirando
          confianza y satisfacción en nuestros clientes.
        </h1>
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Misión</span>{" "}
          ofrecer a las jóvenes playeras que reflejen su estilo único y
          personalidad, mediante diseños frescos, materiales de alta calidad y
          un servicio excepcional, promoviendo la autoexpresión y la confianza
          en sí mismos.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continuar Comprando
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
