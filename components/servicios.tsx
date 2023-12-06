import React from 'react';
import Image from 'next/image';

interface Feature {
  imagen: JSX.Element;
  titulo: string;
  desc: string;
}

const Servicios = () => {
  const features: Feature[] = [
    {
      imagen: <Image src="/logoicono.png" width={96} height={96} alt="" />,
      titulo: 'Peluquería',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      imagen: <Image src="/logoicono.png" width={96} height={96} alt="" />,
      titulo: 'Odontología',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      imagen: <Image src="/logoicono.png" width={96} height={96} alt="" />,
      titulo: 'Veterinario',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      imagen: <Image src="/logoicono.png" width={96} height={96} alt="" />,
      titulo: 'Entrenamiento',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      imagen: <Image src="/logoicono.png" width={96} height={96} alt="" />,
      titulo: 'Psicología canina',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
    {
      imagen: <Image src="/logoicono.png" width={96} height={96} alt="" />,
      titulo: 'Fiestas de cumpleanos',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.',
    },
  ];

  return (
    <section className="mb-20">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="mt-12">
          <ul className="grid gap-y-4 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 sm:text-center md:text-center lg:text-left xl:text-left">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-24 h-24 flex items-center justify-center sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0">
                  {item.imagen}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.titulo}
                </h4>
                <p className="text-sm">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Servicios;
