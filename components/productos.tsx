import React, { FC } from "react";
import { ShopSvg } from "./svg/shop";
import Image from "next/image";

interface Feature {
  imagen: JSX.Element;
  titulo: string;
  precio: string;
}

interface ProductosProps {
  imagenDerecha: boolean;
}

const Productos: FC<ProductosProps> = ({ imagenDerecha }) => {
  const features: Feature[] = [
    {
      imagen: (
        <div className="w-[100px] mx-auto flex sm:mx-auto md:mx-2 lg:mx-auto xl:mx-2">
          <Image src="/bolsa.png" width={100} height={100} alt="" />
        </div>
      ),
      titulo: "1st Choice Puppy Chiot",
      precio: "$9.99",
    },
    {
      imagen: (
        <div className="w-[100px] mx-auto flex sm:mx-auto md:mx-2 lg:mx-auto xl:mx-2">
          <Image src="/bolsa.png" width={100} height={100} alt="" />
        </div>
      ),
      titulo: "2nd Choice Puppy Chiot",
      precio: "$10.99",
    },
    {
      imagen: (
        <div className="w-[100px] mx-auto flex sm:mx-auto md:mx-2 lg:mx-auto xl:mx-2">
          <Image src="/bolsa.png" width={100} height={100} alt="" />
        </div>
      ),
      titulo: "3rd Choice Puppy Chiot",
      precio: "$12.99",
    },
    {
      imagen: (
        <div className="w-[100px] mx-auto flex sm:mx-auto md:mx-2 lg:mx-auto xl:mx-2">
          <Image src="/bolsa.png" width={100} height={100} alt="" />
        </div>
      ),
      titulo: "4th Choice Puppy Chiot",
      precio: "$7.99",
    },
    {
      imagen: (
        <div className="w-[100px] mx-auto flex sm:mx-auto md:mx-2 lg:mx-auto xl:mx-2">
          <Image src="/bolsa.png" width={100} height={100} alt="" />
        </div>
      ),
      titulo: "5th Choice Puppy Chiot",
      precio: "$6.99",
    },
    {
      imagen: (
        <div className="w-[100px] mx-auto flex sm:mx-auto md:mx-2 lg:mx-auto xl:mx-2">
          <Image src="/bolsa.png" width={100} height={100} alt="" />
        </div>
      ),
      titulo: "6th Choice Puppy Chiot",
      precio: "$3.99",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 mb-20">
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-20">
        {imagenDerecha ? (
          <>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-x-12 justify-center">
                {features.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    {item.imagen}
                    <h4 className="text-sm text-black font-semibold">
                      {item.titulo}
                    </h4>
                    <p className="text-neutral-600">{item.precio}</p>
                    <img className="w-32" src="/review.png" alt="" />
                    <button className="bg-primary-300 text-white px-8 py-1 flex items-center space-x-2 rounded-md hover:bg-primary-100">
                      <ShopSvg />
                      <span>Agregar</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-1 my-auto lg:block hidden">
              <Image src="/cat.png" width={300} height={300} alt="" />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-1 lg:block hidden">
              <Image src="/cat.png" width={300} height={300} alt="" />
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-y-8 gap-x-12 justify-center">
                {features.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    {item.imagen}
                    <h4 className="text-sm text-black font-semibold">
                      {item.titulo}
                    </h4>
                    <p className="text-neutral-600">{item.precio}</p>
                    <img className="w-32" src="/review.png" alt="" />
                    <button className="bg-primary-300 text-white px-8 py-1 flex items-center space-x-2 rounded-md hover:bg-primary-100">
                      <ShopSvg />
                      <span>Agregar</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Productos;
