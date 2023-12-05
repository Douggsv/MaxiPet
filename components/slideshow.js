import { useState } from 'react';

function Slide() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    './foto1.png',
    './foto2.png',
    './foto3.png',
  ];

  const indicators = slides.map((slide, index) => (
    <button
      key={index}
      onClick={() => setActiveSlide(index)}
      className={`mx-1 box-content h-1 w-8 flex-initial cursor-pointer border-0 border-y-4 border-solid border-transparent bg-red-500 bg-clip-padding p-0 ${activeSlide === index ? 'opacity-100' : 'opacity-50'
        } transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none`}
      aria-current={activeSlide === index ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
    ></button>
  ));

  const carouselItems = slides.map((slide, index) => (
    <div
      key={index}
      className={`${activeSlide === index ? 'block' : 'hidden'
        } w-full overflow-hidden after:clear-both after:block after:content-['']`}
      data-te-carousel-item
      data-te-carousel-active={activeSlide === index ? 'true' : 'false'}
    >
      <img src={slide} className="block w-full" alt={`Slide ${index + 1}`} />
    </div>
  ));

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >

      <div className="absolute bottom-0 left-0 right-0 z-20 mx-15% mb-4 flex list-none justify-center p-0" data-te-carousel-indicators>
        {indicators}
      </div>


      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {carouselItems}
      </div>




      <button
        className="absolute bottom-0 right-0 top-0 z-10 flex w-15% items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-cubic-bezier(0.25,0.1,0.25,1.0) hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={goToNextSlide}
        data-te-target="#carouselExampleIndicators"
        data-te-slide="next"
      >

      </button>
    </div>
  );
}

export default Slide;
