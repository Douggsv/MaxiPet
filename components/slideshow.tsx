import { useState } from 'react';
import Image from 'next/image';

function Slide(): JSX.Element {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const slides: string[] = ['/foto1.png', '/foto2.png', '/foto3.png'];

  const indicators = slides.map((slide, index) => (
    <button
      type="button"
      key={index}
      onClick={() => setActiveSlide(index)}
      className={`mx-1 box-content h-1 w-8 flex-initial cursor-pointer border-0 border-y-4 border-solid border-transparent bg-red-500 bg-clip-padding p-0 ${
        activeSlide === index ? 'opacity-100' : 'opacity-50'
      } transition-opacity duration-600 ease-cubic-bezier(0.25,0.1,0.25,1.0) motion-reduce:transition-none`}
      aria-current={activeSlide === index ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
    />
  ));

  const carouselItems = slides.map((slide, index) => (
    <div
      key={index}
      className={`${
        activeSlide === index ? 'block' : 'hidden'
      } w-full overflow-hidden after:clear-both after:block after:content-['']`}
      data-te-carousel-item
      data-te-carousel-active={activeSlide === index ? 'true' : 'false'}
    >
      <Image
        src={slide}
        width={800}
        height={600}
        className="block w-full sm:scale-[1.5] md:scale-[1] lg:scale-[1] xl:scale-[1]"
        alt={`Slide ${index + 1}`}
      />
    </div>
  ));
  return (
    <div
      id="carouselExampleIndicators "
      className="relative mb-20"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-20 mx-15% mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {indicators}
      </div>

      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {carouselItems}
      </div>
    </div>
  );
}

export default Slide;
