/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const Modal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isVisible) {
      confetti();
    }
  }, [isVisible]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Cerrar el modal si se presiona la tecla Escape (código 27)
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
      onKeyDown={handleKeyDown} // Manejar evento de teclado
      role="dialog"
      aria-labelledby="modal-title"
    >
      <div className="flex flex-col ">
        <div className=" bg-gray-100 drop-shadow-lg rounded-lg px-10 z-900 sm:w-[21.25rem] md:w-[40.25rem] lg:w-[46.25rem] xl:w-[46.25rem] py-10">
          <p className=" sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold  text-center flex justify-center">
            Bienvenid@ a mi prueba técnica para AvilaTek
          </p>
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-xl text-center justify-center py-2 mb-2">
            Desarrollado por Douglas Marquez 👩‍💻
          </p>
          <div className="justify-center flex">
            <button
              type="button"
              onClick={() => onClose()}
              className=" ease-in duration-200 hover:scale-[1.1] text-white bg-primary-300 border-1 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded sm:text-sm md:text-lg lg:text-lg xl:text-lg font-medium "
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
export default Modal;
