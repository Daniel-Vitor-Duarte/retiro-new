import Image from "next/image";
import Exclamation from "public/icons/exclamation-triangle.svg"
import Print1 from "public/images/testimonials-1.png"
import Print2 from "public/images/testimonials-2.png"
import Print3 from "public/images/testimonials-3.png"
import Print4 from "public/images/testimonials-4.png"
import Print5 from "public/images/testimonials-5.png"
import Print6 from "public/images/testimonials-6.png"
import Print7 from "public/images/testimonials-7.png"
import Print8 from "public/images/testimonials-8.png"
import Retiro1 from "public/images/retiro-pic-1.png"
import Retiro2 from "public/images/retiro-pic-2.png"
import Retiro3 from "public/images/retiro-pic-3.png"
import Retiro4 from "public/images/retiro-pic-4.png"
import Retiro1M from "public/images/retiro-pic-1-m.png"
import Retiro2M from "public/images/retiro-pic-2-m.png"
import Retiro3M from "public/images/retiro-pic-3-m.png"
import X from "public/icons/x.svg"
import Smile from "public/icons/smile.svg"
import line from "public/icons/line.svg"
import lineM from "public/icons/lineM.svg"
import Invert from "public/icons/arrows-up-down.svg"


export default function Testimonial() {
  return (
    <main className="bg-[#151E21] pt-12 sm:pt-[3.5rem] mm:px-8">
      <section className="max-w-[64rem] sm:max-w-[22.4rem] mx-auto ">
        <div className=" flex items-center ">
          <div className="max-w-[23rem] sm:max-w-[2.18rem] w-full h-[.12rem] bg-[#354044]"></div>
          <div className="text-[#FB2F4F] font-bold flex items-center gap-2 px-4 uppercase ">
            <Image src={Exclamation} alt="" />
            <p className="mm:w-[14.6rem]">Nota de Esclarecimento</p>
          </div>
          <div className="max-w-[23rem] sm:max-w-[2.18rem] w-full h-[.12rem] bg-[#354044]"></div>
        </div>
        <p className="leading-[1.75rem] sm:leading-[1.5rem] text-[#FCFCFC] sm:text-[0.875rem] text-center mt-2 sm:mt-4">
          Esse é um evento extremo. Não vai ter tempo de descanso, conversa fiada ou qualquer outra bobagem. Vamos sugar até a última gota da sua energia mental com um único objetivo: colocar seu produto para vender, e vender muito. Se você sobreviver, vai valer a pena. Pense duas vezes antes de cadastrar seu e-mail, nem todo mundo suporta a pressão.
        </p>
      </section>

      <section className="mm:px-32 sm:px-4">
        <h1 className="max-w-[36.5rem] sm:max-w-[19.43rem] mx-auto mt-[5.5rem] sm:mt-[6rem] text-center text-[#FCFCFC] text-[2rem] sm:text-[1.5rem] leading-[3rem] sm:leading-[2rem] font-bold">
          Veja o que aconteceu com o cérebro de quem caiu nessa furada
        </h1>
        {/* <Image src={} alt=""/> */}
        <div className="w-fit mt-12 mx-auto bg-[#354044] py-12 sm:py-8 px-[2.25rem] sm:px-4 rounded-[2rem] flex lg:flex-row flex-wrap justify-center gap-2 ">
          <div className="flex flex-col gap-4 sm:gap-2">
            <Image src={Print1} alt="" />
            <Image src={Print2} alt="" />
          </div>

          <div className="flex flex-col gap-4 sm:gap-2">
            <Image src={Print3} alt="" />
            <Image src={Print4} alt="" />
          </div>

          <div className="flex flex-col gap-4 sm:gap-2">
            <Image src={Print5} alt="" />
            <Image src={Print6} alt="" />
          </div>

          <div className="flex flex-col gap-4 sm:gap-2">
            <Image src={Print7} alt="" />
            <Image src={Print8} alt="" />
          </div>
        </div>
      </section>

      <section className="max-w-[76rem]  mx-auto mt-[10rem] sm:mt-[6rem] px-[6.5rem] py-16 sm:p-0 rounded-[1.625rem] bg-gradient-leve sm:bg-none">
        <h1 className="text-[#ECF23D] text-[2rem] sm:text-[1.5rem] sm:text-center font-bold leading-[3rem] sm:leading-[2rem] max-w-[37rem] mx-auto sm:max-w-[14.3125rem]">
          O clima é leve e confortável, todo mundo se diverte no nosso Retiro
        </h1>
        <div className="flex mm:flex-col gap-4 mt-12 mm:mx-auto w-fit sm:hidden">
          <div className="flex gap-4">
            <Image src={Retiro1} alt="" />
            <Image src={Retiro2} alt="" />
          </div>
          <div className="flex flex-col mm:flex-row mm:justify-center gap-4">
            <Image src={Retiro3} alt="" />
            <Image src={Retiro4} alt="" />
          </div>
        </div>
        {/* mobile */}
        <div className="sm:flex flex-col gap-2 mt-12 sm:mt-6 w-fit mx-auto hidden">
          <Image src={Retiro1M} alt="" />
          <div className="flex gap-2">
            <Image src={Retiro2M} alt="" />
            <Image src={Retiro3M} alt="" />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center gap-8 pt-[5rem] sm:mt-12 pb-[10rem] sm:pb-12 mt-[5rem] bg-gradient-exigir">

        <h2 className="text-[1.5rem] sm:max-w-[15.3125rem] sm:text-center text-[#FCFCFC] font-bold">
          Esse evento vai exigir muito da sua cabeça
        </h2>

        <div className="text-[#75979B] text-[.875rem] font-medium flex sm:flex-col sm:items-center gap-4">
          <div className="flex px-8 mm:px-4 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] w-fit">
            <Image src={X} alt="" />
            Criar página de venda é estressante
          </div>
          <div className="flex px-8 mm:px-4 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] w-fit">
            <Image src={X} alt="" />
            Criar vídeo de vendas é massante
          </div>
          <div className="flex px-8 mm:px-4 py-2 gap-2 border border-[#75979B] rounded-[5.625rem] w-fit">
            <Image src={X} alt="" />
            Criar anúncio é desafiador
          </div>
        </div>

        <div className="mt-2">
          <Image className="sm:hidden" src={line} alt="" />
          <Image className="sm:block hidden" src={lineM} alt="" />
          <Image className="w-fit mx-auto -mt-5" src={Invert} alt="" />
        </div>

        <h2 className="text-[1.5rem] text-[#FCFCFC] sm:max-w-[15.3125rem] sm:text-center font-bold">
          Mas você vai ter dinheiro para
        </h2>

        <div className="text-[#75979B] text-[.875rem] font-medium flex sm:flex-col sm:items-center gap-4">

          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem]">
            <Image src={Smile} alt="" />
            Escaldar os pés
          </div>

          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem]">
            <Image src={Smile} alt="" />
            Massagem relaxante
          </div>

          <div className="flex px-8 py-2 gap-2 border border-[#75979B] rounded-[5.625rem]">
            <Image src={Smile} alt="" />
            Massagem de pedras quentes
          </div>

        </div>
      </section>
    </main>
  );
}
