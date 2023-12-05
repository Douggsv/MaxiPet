import React from 'react';

const Titulo = ({ texto1, texto2, texto3 }) => {
  return (
    <div className="text-center sm:text-center md:text-left lg:text-center xl:text-left sm: md:ml-14 lg:ml-0 xl:ml-20 mb-20">
      <div className="text-secondary-500">{texto1}</div>
      <div className="title text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl text-primary-300">
        {texto2}
      </div>
      <div className="text-black mt-10">{texto3}</div>
    </div>
  );
};

export default Titulo;
