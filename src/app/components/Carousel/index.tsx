import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; // Include Splide styles
import Image from 'next/image';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Retiro1 from "public/retirovtsd-b/images/slideImg1.webp"
import Retiro2 from "public/retirovtsd-b/images/slideImg2.webp"
import Retiro3 from "public/retirovtsd-b/images/slideImg3.webp"
import Retiro4 from "public/retirovtsd-b/images/slideImg4.webp"
import Retiro5 from "public/retirovtsd-b/images/slideImg5.webp"
import Retiro6 from "public/retirovtsd-b/images/slideImg6.webp"
import Retiro7 from "public/retirovtsd-b/images/slideImg7.webp"
import Retiro8 from "public/retirovtsd-b/images/slideImg8.webp"
import Retiro9 from "public/retirovtsd-b/images/slideImg9.webp"
import Retiro10 from "public/retirovtsd-b/images/slideImg10.webp"
import Retiro1M from "public/retirovtsd-b/images/slideImg1M.webp"
import Retiro2M from "public/retirovtsd-b/images/slideImg2M.webp"
import Retiro3M from "public/retirovtsd-b/images/slideImg3M.webp"
import Retiro4M from "public/retirovtsd-b/images/slideImg4M.webp"
import Retiro5M from "public/retirovtsd-b/images/slideImg5M.webp"
import Retiro6M from "public/retirovtsd-b/images/slideImg6M.webp"
import Retiro7M from "public/retirovtsd-b/images/slideImg7M.webp"
import Retiro8M from "public/retirovtsd-b/images/slideImg8M.webp"
import Retiro9M from "public/retirovtsd-b/images/slideImg9M.webp"
import Retiro10M from "public/retirovtsd-b/images/slideImg10M.webp"

const CustomCarousel = () => {
  return (
    <Splide
      options={{
        type: 'loop',
        perPage: 2,
        gap: '0',
        arrows: false,
        pagination: false,
        drag: 'free',
        slideFocus: false,
        autoScroll: {
          pauseOnHover: true,
          pauseOnFocus: false,
          rewind: false,
          speed: .8,
        },

      }}
      extensions={{ AutoScroll }}
      className="w-full mt-12"
    >
      {/* Slide 1 */}
      <SplideSlide>
        <div className="w-fit lg:mx-4 mx-2">
            <Image className='lg:block hidden' src={Retiro1} alt="Retiro 1" />
            <Image className='lg:hidden' src={Retiro1M} alt="Retiro 1" />
        </div>
      </SplideSlide>

      {/* Slide 2 */}
      <SplideSlide>
        <div className="flex lg:gap-8 gap-4 w-fit lg:mx-4 mx-2">
          <div className="flex flex-col lg:gap-8 gap-4">
            <div className="flex lg:gap-8 gap-4">
              <Image className='lg:block hidden' src={Retiro2} alt="Retiro 2" />
              <Image className='lg:block hidden' src={Retiro3} alt="Retiro 3" />
              <Image className='lg:hidden' src={Retiro2M} alt="Retiro 2" />
              <Image className='lg:hidden' src={Retiro3M} alt="Retiro 3" />
            </div>
            <Image className='lg:block hidden' src={Retiro4} alt="Retiro 4" />
            <Image className='lg:hidden' src={Retiro4M} alt="Retiro 4" />
          </div>
        </div>
      </SplideSlide>

      {/* Slide 3 */}
      <SplideSlide>
        <div className="flex lg:gap-8 gap-4 w-fit lg:mx-4 mx-2">
          <div>
            <Image className='lg:block hidden' src={Retiro5} alt="Retiro 8" />
            <Image className='lg:hidden' src={Retiro5M} alt="Retiro 8" />
          </div>
          <div className="flex flex-col lg:gap-8 gap-4">
            <Image className='lg:block hidden' src={Retiro6} alt="Retiro 9" />
            <Image className='lg:block hidden' src={Retiro7} alt="Retiro 9" />
            <Image className='lg:hidden' src={Retiro6M} alt="Retiro 9" />
            <Image className='lg:hidden' src={Retiro7M} alt="Retiro 10" />
          </div>
        </div>
      </SplideSlide>

      {/* Slide 4 */}
      <SplideSlide>
        <div className="flex lg:gap-8 gap-4 w-fit lg:mx-4 mx-2">
          <div>
            <Image className='lg:block hidden' src={Retiro8} alt="Retiro 8" />
            <Image className='lg:hidden' src={Retiro8M} alt="Retiro 8" />
          </div>
          <div className="flex flex-col lg:gap-8 gap-4">
            <Image className='lg:block hidden' src={Retiro9} alt="Retiro 9" />
            <Image className='lg:block hidden' src={Retiro10} alt="Retiro 10" />
            <Image className='lg:hidden' src={Retiro9M} alt="Retiro 9" />
            <Image className='lg:hidden' src={Retiro10M} alt="Retiro 10" />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default CustomCarousel;
