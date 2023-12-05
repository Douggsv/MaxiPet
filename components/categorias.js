import React from 'react';

const Categoria = () => {
  const elementos = [
    { id: 1, imagenSrc: './logoicono.png', titulo: 'Perros' },
    { id: 2, imagenSrc: './logoicono.png', titulo: 'Gatos' },
    { id: 3, imagenSrc: './logoicono.png', titulo: 'Peces' },
    { id: 4, imagenSrc: './logoicono.png', titulo: 'Roedores' },
    { id: 5, imagenSrc: './logoicono.png', titulo: 'Reptiles' },
    { id: 6, imagenSrc: './logoicono.png', titulo: 'Placeholder' },
  ];

  return (
    <div className='mb-20'>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-2 justify-center sm:mx-0 md:mx-0 lg:mx-0 xl:mx-40 ">
        {elementos.map((elemento) => (
          <div key={elemento.id} className="flex flex-col items-center ">
            <img
              src={elemento.imagenSrc}
              className="object-cover mb-1 h-[100px] w-[100px] cursor-pointer hover:opacity-50"
              alt="Imagen"
            />
            <h3 className="text-center text-base cursor-pointer ">{elemento.titulo}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoria;
