import React from 'react';
import Image from 'next/image';

interface Elemento {
  id: number;
  imagenSrc: string;
  titulo: string;
}

const Categoria: React.FC = () => {
  const elementos: Elemento[] = [
    { id: 1, imagenSrc: '/logoicono.png', titulo: 'Perros' },
    { id: 2, imagenSrc: '/logoicono.png', titulo: 'Gatos' },
    { id: 3, imagenSrc: '/logoicono.png', titulo: 'Peces' },
    { id: 4, imagenSrc: '/logoicono.png', titulo: 'Roedores' },
    { id: 5, imagenSrc: '/logoicono.png', titulo: 'Reptiles' },
    { id: 6, imagenSrc: '/logoicono.png', titulo: 'Placeholder' },
  ];

  return (
    <div className="mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2 justify-center sm:mx-0 md:mx-0 lg:mx-0 xl:mx-60">
        {elementos.map((elemento) => (
          <div key={elemento.id} className="flex flex-col items-center ">
            <Image
              src={elemento.imagenSrc}
              alt="Imagen"
              width={100}
              height={100}
              className="object-cover mb-1 h-20 w-20 cursor-pointer hover:opacity-50 transition-transform duration-300 transform hover:-translate-y-1"
            />
            <h3 className="text-center text-base cursor-pointer ">
              {elemento.titulo}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
