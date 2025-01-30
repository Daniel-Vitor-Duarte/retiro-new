import Image from "next/image";
import Exclamation from "public/retirovtsd-b/icons/exclamation-triangle.svg"
import Print1 from "public/retirovtsd-b/images/testimonials-1.png"
import Print2 from "public/retirovtsd-b/images/testimonials-2.png"
import Print3 from "public/retirovtsd-b/images/testimonials-3.png"
import Print4 from "public/retirovtsd-b/images/testimonials-4.png"
import Print5 from "public/retirovtsd-b/images/testimonials-5.png"
import Print6 from "public/retirovtsd-b/images/testimonials-6.png"
import Print7 from "public/retirovtsd-b/images/testimonials-7.png"
import Print8 from "public/retirovtsd-b/images/testimonials-8.png"
import Print1M from "public/retirovtsd-b/images/testimonials-1-mob.webp"
import Print2M from "public/retirovtsd-b/images/testimonials-2-mob.webp"
import Print3M from "public/retirovtsd-b/images/testimonials-3-mob.webp"
import Print4M from "public/retirovtsd-b/images/testimonials-4-mob.webp"
import Print5M from "public/retirovtsd-b/images/testimonials-5-mob.webp"
import Print6M from "public/retirovtsd-b/images/testimonials-6-mob.webp"
import Print7M from "public/retirovtsd-b/images/testimonials-7-mob.webp"
import Print8M from "public/retirovtsd-b/images/testimonials-8-mob.webp"
import X from "public/retirovtsd-b/icons/x.svg"
import Smile from "public/retirovtsd-b/icons/smile.svg"
import line from "public/retirovtsd-b/icons/line.svg"
import lineM from "public/retirovtsd-b/icons/lineM.svg"
import Invert from "public/retirovtsd-b/icons/arrows-up-down.svg"
import { Poppins } from "next/font/google";
import Carousel from "../../Carousel";


const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})



export default function Testimonial() {
  return (
    <main className={`bg-[#151E21] lg:pt-[6rem] pt-[3rem] ${poppins.className}`}>
      <section className="lg:max-w-[64rem] max-w-[21.4375rem] mx-auto text-[#FC4C6A] border-2 border-[rgba(251,47,79,0.24)] rounded-2xl py-6 lg:px-[2.5rem] px-4">
        <div className=" font-bold flex justify-center items-center gap-2 px-4 uppercase ">
          <Image src={Exclamation} alt="" />
          <p className="lg:text-[1.125rem]">Nota de Esclarecimento</p>
        </div>
        <p className="lg:text-[1.125rem] text-[0.75rem] lg:leading-[1.5rem] leading-[1.375rem]  lg:flex-row  text-center lg:mt-2 mt-4 font-medium">
          Esse é um evento extremo. Não vai ter tempo de descanso, conversa fiada ou qualquer outra bobagem. Vamos sugar até a última gota da sua energia mental com um único objetivo: colocar seu produto para vender, e vender muito. Se você sobreviver, vai valer a pena. Pense duas vezes antes de cadastrar seu e-mail, nem todo mundo suporta a pressão.
        </p>
      </section>



      <section className="px-4">
        <h1 className="lg:max-w-[55rem] max-w-[21.4375rem] mx-auto lg:mt-[6rem] mt-[3rem] text-center text-[#FCFCFC] lg:text-[2.625rem] text-[1.5rem] lg:leading-[3rem] leading-[2rem] font-bold">
          Veja o que aconteceu com o cérebro de quem caiu nessa furada
        </h1>
        {/* <Image src={} alt=""/> */}
        <div className="w-fit lg:mt-12 mt-8 mx-auto bg-[#354044] lg:py-12 py-8 lg:px-[2.25rem] px-4 lg:rounded-[2rem] rounded-[1rem] flex lg:flex-row flex-wrap justify-center gap-2 ">
          <div className="flex flex-col lg:gap-4 gap-2">
            <Image className="lg:block hidden" src={Print1} alt="" />
            <Image className="lg:block hidden" src={Print2} alt="" />
            <Image className="lg:hidden" src={Print1M} alt="" />
            <Image className="lg:hidden" src={Print2M} alt="" />
          </div>

          <div className="flex flex-col lg:gap-4 gap-2">
            <Image className="lg:block hidden" src={Print3} alt="" />
            <Image className="lg:block hidden" src={Print4} alt="" />
            <Image className="lg:hidden" src={Print3M} alt="" />
            <Image className="lg:hidden" src={Print4M} alt="" />
          </div>

          <div className="flex flex-col lg:gap-4 gap-2">
            <Image className="lg:block hidden" src={Print5} alt="" />
            <Image className="lg:block hidden" src={Print6} alt="" />
            <Image className="lg:hidden" src={Print5M} alt="" />
            <Image className="lg:hidden" src={Print6M} alt="" />
          </div>

          <div className="flex flex-col lg:gap-4 gap-2">
            <Image className="lg:block hidden" src={Print7} alt="" />
            <Image className="lg:block hidden" src={Print8} alt="" />
            <Image className="lg:hidden" src={Print7M} alt="" />
            <Image className="lg:hidden" src={Print8M} alt="" />
          </div>
        </div>
      </section>

      <div>
        <h1 className="lg:text-[2.625rem] lg:leading-[3rem] text-[1.5rem] leading-[2rem] text-[#ECF23D] lg:max-w-[53.75rem] mx-auto max-w-[19.9375rem] text-center font-bold lg:mt-[6rem] mt-[3rem]">
          O clima é leve e confortável, todo mundo se diverte no nosso Retiro
        </h1>
        <Carousel />
      </div>

      <section className="flex flex-col items-center gap-8  lg:pt-[6rem] pt-12 pb-[6rem] bg-gradient-exigir">

        <h2 className="text-[1.5rem] lg:max-w-full max-w-[19.4375rem] lg:text-left text-center text-[#FCFCFC] font-bold">
          Esse evento vai exigir muito da sua cabeça
        </h2>

        <div className="text-[#FCFCFC] text-[.875rem] font-medium flex lg:flex-row flex-col lg:items-start items-center gap-2 lg:mt-0 -mt-2">
          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] lg:w-fit w-full">
            <Image src={X} alt="" />
            Criar página de venda é estressante
          </div>
          <div className="flex px-8  py-2 gap-2 border border-[#75979B] rounded-[5.625rem] lg:w-fit w-full">
            <Image src={X} alt="" />
            Criar vídeo de vendas é massante
          </div>
          <div className="flex px-8  py-2 gap-2 border border-[#75979B] rounded-[5.625rem] lg:w-fit w-full">
            <Image src={X} alt="" />
            Criar anúncio é desafiador
          </div>
        </div>

        <div className="mt-4">
          <Image className="lg:block hidden" src={line} alt="" />
          <Image className="lg:hidden" src={lineM} alt="" />
          <Image className="w-fit mx-auto -mt-5" src={Invert} alt="" />
        </div>

        <h2 className="text-[1.5rem] text-[#FCFCFC] lg:max-w-full max-w-[15.3125rem] lg:text-left text-center font-bold">
          Mas você vai ter dinheiro para
        </h2>

        <div className="text-[#FCFCFC] text-[.875rem] font-medium flex lg:flex-row flex-col text-left items-center gap-4">

          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] lg:w-fit w-full">
            <Image src={Smile} alt="" />
            Escaldar os pés em águas termais
          </div>

          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] lg:w-fit w-full">
            <Image src={Smile} alt="" />
            Massagem relaxante
          </div>

          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] lg:w-fit w-full">
            <Image src={Smile} alt="" />
            Massagem de pedras quentes
          </div>

        </div>
      </section>
    </main>
  );
}
