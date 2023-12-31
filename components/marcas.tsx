import React from 'react';
import Image from 'next/image';

const Marcas: React.FC = () => {
  const texto =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.';
  const imagenes: string[] = [
    '/choice.png',
    '/choice.png',
    '/choice.png',
    '/choice.png',
  ];

  return (
    <section className="max-w-screen-xl mx-auto sm:text-center md:text-center lg:text-left xl:text-left text-black md:px-8 mb-20 ">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-full md:w-full lg:w-1/3 mb-20">
          <p>{texto}</p>
        </div>

        <div className="w-full sm:w-full md:w-full lg:w-2/3 flex md:justify-center md:flex-wrap">
          {imagenes.map((imagen, idx) => (
            <div
              key={idx}
              className={`w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4 ${
                idx < 2 ? 'sm:mb-0' : ''
              }`}
            >
              <Image src={imagen} width={126} height={126} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marcas;
