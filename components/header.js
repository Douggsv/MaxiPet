import { useEffect, useRef, useState } from "react";
import { ShopSvg } from "../components/svg/shop";
import { UserSvg } from "../components/svg/user";
import { HouseSvg } from "../components/svg/house";
import { LocSvg } from "../components/svg/loc";
import { FacebookSvg } from "../components/svg/fb";
import { InstagramSvg } from "../components/svg/ig";
import { TwitterSvg } from "../components/svg/twitter";
import DropDown from "../components/dropdown";
const Header = () => {
  const [state, setState] = useState(false);

  const navRef = useRef(null);

  const navigation = [
    { title: "Inicio", path: "#" },
    { title: "Comprar por marca", path: "#" },
    { title: "Comprar por mascota", path: "#" },
    { title: "Nuestros servicios", path: "#" },
    { title: "Promociones", path: "#" },
    { title: "Nosotros", path: "#" },
  ];
  useEffect(() => {
    if (navRef.current) {
      const body = document.body;
      const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"];
      if (state) body.classList.add(...customBodyStyle);
      else body.classList.remove(...customBodyStyle);
      const customStyle = ["sticky-nav", "fixed", "border-b"];
      window.onscroll = () => {
        if (window.scrollY > 80 && navRef.current) {
          navRef.current.classList.add(...customStyle);
        } else if (navRef.current) {
          navRef.current.classList.remove(...customStyle);
        }
      };
    }
  }, [state]);
  return (
    <div>
      <div className="bg-primary-300 w-full h-[30px] relative z-40 flex justify-end">
        <div className="flex align-middle relative z-50">
          <DropDown />
          <div className=" flex items-center space-x-2 mr-8">
            <TwitterSvg />
            <FacebookSvg />
            <InstagramSvg />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mx-auto px-4">
        <a className="ml-4" href="#">
          <img src="/logomaxi.png" width={169.46} height={46} alt="Maxipet" />
        </a>
        <div className="flex items-center justify-center flex-1">
          <form className="flex items-center space-x-2 p-2 max-w-3xl">
            <div className="relative flex w-full py-2 sm:w-auto sm:mr-2">
              <input
                className="w-full sm:w-[200px] h-[33px] py-2 rounded-lg border border-gray-400 placeholder-gray-300 text-sm focus:outline-none"
                type="text"
                placeholder="Buscador"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center space-x-3 ml-auto mr-4">
          <LocSvg fill="black" />
          <HouseSvg />
          <UserSvg />
          <ShopSvg />
        </div>
      </div>

      <nav
        ref={navRef}
        className="bg-white drop-shadow-lg relative  z-20  w-full top-0 items-center justify-center"
      >
        <div className="items-center  max-w-screen-xl mx-auto md:px-8 lg:flex">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <div className="flex items-center justify-center flex-1 lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`items-center content-center justify-center mx-auto ${
              state ? "block" : "hidden"
            } lg:flex lg:mx-0`}
          >
            <ul className="justify-center items-center space-y-8 lg:flex gap-24 lg:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-gray-600 hover:text-primary-300 sm:text-sm md:text-sm lg:text-sm xl:text-md justify-center items-center flex"
                  >
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
