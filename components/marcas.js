import React from 'react';

const Marcas = () => {
  const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.";
  const imagenes = [
    "./choice.png",
    "./choice.png",
    "./choice.png",
    "./choice.png"
  ];
  return (
    <section className="max-w-screen-xl mx-auto px-4 text-black md:px-8 mb-20 ">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-full md:w-full lg:w-1/3 py-10">
          <p>{texto}</p>
        </div>

        <div className="w-full sm:w-full md:w-full lg:w-2/3 flex md:justify-center md:flex-wrap">
          {imagenes.map((imagen, idx) => (
            <div key={idx} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 px-2 mb-4">
              <img className="w-[126px]" src={imagen} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marcas;
