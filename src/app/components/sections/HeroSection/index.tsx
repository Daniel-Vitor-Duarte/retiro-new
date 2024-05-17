import Image from "next/image";
import Logo from "public/icons/logo-retiro.svg"
import ArrowR from "public/icons/arrow-narrow-right.svg"
import Calendar from "public/icons/calendar.svg"
import Location from "public/icons/location.svg"
import Profile from "public/icons/person_add.svg"


const HeroSection = () => {
  return (
    <main className="sm:h-auto bg-image-top ">
        <section className="max-w-[76rem]  mm:px-[5rem] mx-auto pt-[5.5rem] mm:pt-[3.5rem] sm:pt-[3rem] sm:px-4 relative z-10">
            <Image className="w-fit sm:mx-auto" src={Logo} alt=""/>
            <div className="mt-[3rem] sm:mt-[16rem] sm:max-w-[21.4375rem] sm:mx-auto">
                <h1 className="text-[#ECF23D] text-[4rem] sm:text-[2rem] font-bold max-w-[36.96rem] leading-[4.5rem] sm:leading-[3rem]">
                Você vai precisar de um cérebro reserva, 
                </h1>
                <p className="mt-2 text-[#FCFCFC] sm:text-[.875rem] max-w-[30.5rem] leading-[1.75rem] sm:leading-[1.5rem] ">
                mas vai sair com tudo pronto: produto, página de vendas, vídeo de vendas e anúncios, são 2 a 3 meses de trabalho feitos em apenas 2 dias. {" "}<strong> Você vai sair de lá vendendo!</strong>  
                </p>
            </div>
            <div className="w-full mm:w-fit mm:mx-auto lg:mt-[5.5rem] mt-[2rem] bg-[#20292cbf] px-16 sm:px-4 py-[1.38rem] mm:py-3 sm:py-8 border border-[#354044] rounded-2xl text-[#FCFCFC] flex lg:flex-row flex-col justify-between sm:gap-8">
                
                <div>
                    <p className="text-center font-medium uppercase">
                    Edição de Abril
                    </p>
                    <div className="p-2 border border-[#354044] rounded-lg mt-3 w-fit sm:w-full  mx-auto">
                        <a href="">
                            <button className="flex items-center justify-center gap-2 w-[31rem] sm:w-full bg-[#ECF23D] text-[#151E21] sm:text-[0.875rem] font-bold uppercase py-3 rounded-lg">
                                <p>
                                Quero reservar meu lugar
                                </p>
                                <Image src={ArrowR} alt=""/>
                            </button>
                        </a>
                    </div>
                    <div className="mt-3 flex justify-center sm:justify-between gap-[.94rem] sm:text-center">
                        <div className="flex sm:flex-col items-center gap-2 ">
                        <Image src={Calendar} alt=""/>
                        <div>
                            <p className="font-bold text-[.75rem] sm:text-[0.625rem]">
                            25 e 26 de Abril 
                            </p>
                            <p className="text-[.675rem] sm:text-[0.625rem]">
                            Quinta e Sexta
                            </p>
                        </div>
                        </div>
                        <div className="flex sm:flex-col items-center gap-2 ">
                        <Image src={Location} alt=""/>
                        <div>
                            <p className="font-bold text-[.75rem] sm:text-[0.625rem]">
                            Brasília-DF 
                            </p>
                            <p className="text-[.675rem] sm:text-[0.625rem]">
                            Local a definir
                            </p>
                        </div>
                        </div>
                        <div className="flex sm:flex-col items-center gap-2 ">
                        <Image src={Profile} alt=""/>
                            <p className="font-bold text-[.75rem] sm:text-[0.625rem]">
                            Apenas 100 Vagas 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mm:mt-4">
                    <p className="text-center font-medium uppercase">
                    Edição de Outubro
                    </p>
                    <div className="p-2 border border-[#354044] rounded-lg mt-3 w-fit sm:w-full  mx-auto">
                        <a href="">
                            <button className="flex items-center justify-center gap-2 w-[31rem] sm:w-full bg-[#ECF23D] text-[#151E21] sm:text-[0.875rem] font-bold uppercase py-3 rounded-lg">
                                <p>
                                Quero reservar meu lugar
                                </p>
                                <Image src={ArrowR} alt=""/>
                            </button>
                        </a>
                    </div>
                    <div className="mt-3 flex justify-center sm:justify-between gap-[.94rem] sm:text-center">
                        <div className="flex sm:flex-col items-center gap-2 ">
                        <Image src={Calendar} alt=""/>
                        <div>
                            <p className="font-bold text-[.75rem] sm:text-[0.625rem]">
                            25 e 26 de Outubro 
                            </p>
                            <p className="text-[.675rem] sm:text-[0.625rem]">
                            Quinta e Sexta
                            </p>
                        </div>
                        </div>
                        <div className="flex sm:flex-col items-center gap-2 ">
                        <Image src={Location} alt=""/>
                        <div>
                            <p className="font-bold text-[.75rem] sm:text-[0.625rem]">
                            Brasília-DF 
                            </p>
                            <p className="text-[.675rem] sm:text-[0.625rem]">
                            Local a definir
                            </p>
                        </div>
                        </div>
                        <div className="flex sm:flex-col items-center gap-2 ">
                        <Image src={Profile} alt=""/>
                            <p className="font-bold text-[.75rem] sm:text-[0.625rem]">
                            Apenas 100 Vagas 
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
            <div className="w-full h-[21.9rem] absolute bg-gradient-top -mt-[21rem]"></div>
    </main>
  );
};

export default HeroSection;