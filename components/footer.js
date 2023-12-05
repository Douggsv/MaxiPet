import React from "react";

const Footer = () => {
  const footerNavs = [
    {
      label: "Mi cuenta",
      items: [
        {
          href: "#",
          name: "Informacion personal",
        },
        {
          href: "#",
          name: "Direcciones",
        },
        {
          href: "#",
          name: "Mascotas",
        },
        {
          href: "#",
          name: "Ordenes",
        },
        {
          href: "#",
          name: "Agenda",
        },
      ],
    },
    {
      label: "Informacion",
      items: [
        {
          href: "#",
          name: "Formulario de contacto",
        },
        {
          href: "#",
          name: "Preguntas frecuentes",
        },
        {
          href: "#",
          name: "Terminos y condiciones",
        },
        {
          href: "#",
          name: "Politica de privacidad",
        },
      ],
    },
    {
      label: "Atencion al cliente",
      items: [
        {
          href: "#",
          name: "Bello Monte, calle XXXX, local 1",
        },
        {
          href: "#",
          name: "(0212) 575 54 12",
        },
        {
          href: "#",
          name: "soporte@maxipet.com",
        },
        {
          href: "#",
          name: "Lunes a Viernes",
        },
        {
          href: "#",
          name: "9:00 a.m. - 5:00 p.m.",
        },
      ],
    },
  ];

  return (
    <footer className=" py-0  sm:mt-20 md:mt-40 lg:mt-40 xl:mt-60">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {/* Columna 1 */}
          <div className="mb-4">
            <h4 className="font-bold text-primary-300 mb-4">Sobre nosotros</h4>
            <p className="list-none text-sm text-secondary-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
              molestie rhoncus id nunc, porta leo tempus facilisi.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-4 text-primary-300 ">Mi cuenta</h4>
            <ul className="list-none text-sm text-secondary-500">
              <li className="">Informacion personal</li>
              <li className="pt-2">Direcciones</li>
              <li className="pt-2">Mascotas</li>
              <li className="pt-2">Ordenes</li>
              <li className="pt-2">Agenda</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-4 text-primary-300">Informacion</h4>
            <ul className="list-none text-sm text-secondary-500">
              <li className="">Formulario de contacto</li>
              <li className="pt-2">Preguntas frecuentes</li>
              <li className="pt-2">Terminos y condiciones</li>
              <li className="pt-2">Politica de privacidad</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-bold mb-4 text-primary-300">
              Atencion al cliente
            </h4>
            <ul className="list-none text-sm text-secondary-500">
              <li className="">Bello Monte, calle XXXX, local 1</li>
              <li className="pt-2">(0212) 575 54 12</li>
              <li className="pt-2">soporte@maxipet.com</li>
              <li className="pt-2">Lunes a Viernes</li>
              <li className="pt-2">9:00 a.m. - 5:00 p.m.</li>
              <li className="pt-2">Lunes a Viernes</li>
              <li className="pt-2">Lunes a Viernes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="bg-primary-300 text-white py-3 text-center bottom-0 mt-10 relative">
          <div className="absolute inset-x-14 sm:bottom-14 md:sm:bottom-9 lg:bottom-9 xl:bottom-9 flex justify-between px-4">
            <img className="w-[53.11px] h-[60px]" src="vector2.png" />
            <img className="w-[60px]" src="vector1.png" />
          </div>
          <div className="container mx-auto flex justify-center items-center">
            <p className="text-sm flex items-center">
              Copyright © 2021 Maxi Pet. Todos los Derechos Reservados.
              Desarrollado por Avila Tek
              <img
                className="ml-1 sm:w-3 sm:h-2 md:w-4 md:h-4 lg:w-5 lg:h-4 xl:w-5 xl:h-4"
                src="/path0.png"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
