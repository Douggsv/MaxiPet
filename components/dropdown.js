import { useState } from "react";
import { LocSvg } from "./svg/loc";
import { TwitterSvg } from "./svg/twitter";
import { InstagramSvg } from "./svg/ig";
import { FacebookSvg } from "./svg/fb";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Bello monte"); // Inicializa el estado

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Establece la opción seleccionada
    setIsOpen(false); // Cierro el dropdown al hacer clic en una opción
  };

  return (
    <div className="relative flex text-left text-sm align-middle">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-40 px-2 text-sm bg-transparent rounded-md focus:outline-none text-white hover:text-black"
      >
        <LocSvg fill="white" />
        {selectedOption}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`hover:text-black h-5 w-5 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-8 w-40 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                onClick={() => handleOptionClick("La Trinidad")}
              >
                La Trinidad
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                onClick={() => handleOptionClick("Las Mercedes")}
              >
                Las Mercedes
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                onClick={() => handleOptionClick("Sebucan")}
              >
                Sebucan
              </button>
            </li>
            <li>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
                onClick={() => handleOptionClick("Bello monte")}
              >
                Bello Monte
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
