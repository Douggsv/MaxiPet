import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => (
  <footer className="py-0 sm:mt-20 md:mt-40 lg:mt-40 xl:mt-60">
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
          <Image src="/vector2.png" width={53.11} height={60} alt="" />
          <Image src="/vector1.png" width={60} height={60} alt="" />
        </div>
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-sm flex items-center sm:text-[10px] md:text-sm lg:text-sm xl:text-sm">
            Copyright © 2021 Maxi Pet. Todos los Derechos Reservados.
            Desarrollado por Avila Tek
            <Image
              className="ml-1 sm:w-3 sm:h-2 md:w-4 md:h-4 lg:w-5 lg:h-4 xl:w-5 xl:h-4"
              src="/path0.png"
              width={5}
              height={4}
              alt=""
            />
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
