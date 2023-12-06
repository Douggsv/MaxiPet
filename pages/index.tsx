import React, { useState } from 'react';
import Image from 'next/image';
import Slide from '../components/slideshow';
import Categorias from '../components/categorias';
import Productos from '../components/productos';
import Titulo from '../components/titulo';
import Header from '../components/header';
import Productos2 from '../components/productos2';
import Servicios from '../components/servicios';
import Marcas from '../components/marcas';
import Footer from '../components/footer';
import Modal from '../components/modal';

function HomePage() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="mx-auto">
      <Header />
      <Slide />
      <div className=" ">
        <Titulo
          texto1="Lorem ipsum dolor sit amet."
          texto2="UNA GRAN VARIEDAD DE CATEGORIAS"
          texto3=""
        />
        <Categorias />
        <Titulo
          texto1="Lorem ipsum dolor sit amet."
          texto2="PRODUCTOS DESTACADOS"
          texto3=""
        />
        <Productos imagenDerecha />
        <Image
          src="/ad2.png"
          width={1160}
          height={220}
          className="m-20 mx-auto"
          alt=""
        />
        <Titulo
          texto1="Lorem ipsum dolor sit amet."
          texto2="PRODUCTOS POPULARES"
          texto3=""
        />
        <Productos2 />
        <Image
          src="/ad1.png"
          width={1160}
          height={220}
          className="m-20 mx-auto"
          alt=""
        />
        <Titulo
          texto1="Lorem ipsum dolor sit amet."
          texto2="ÚLTIMOS PRODUCTOS"
          texto3=""
        />
        <Productos imagenDerecha={false} />
        <Titulo
          texto1="Lorem ipsum dolor sit amet."
          texto2="NUESTROS SERVICIOS"
          texto3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed."
        />
        <Servicios />
        <Titulo
          texto1="Lorem ipsum dolor sit amet."
          texto2="TRABAJAMOS CON LAS MEJORES MARCAS"
          texto3=""
        />
        <Marcas />
        <Footer />
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default HomePage;
