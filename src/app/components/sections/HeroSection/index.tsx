import Image from "next/image";
import Logo from "public/retirovtsd-b/icons/logo-retiro.svg"
import ArrowR from "public/retirovtsd-b/icons/arrow-narrow-right.svg"
import Calendar from "public/retirovtsd-b/icons/calendar.svg"
import Location from "public/retirovtsd-b/icons/location.svg"
import Profile from "public/retirovtsd-b/icons/person_add.svg"
import { Poppins } from "next/font/google";


const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    preload: true,
})


const HeroSection = () => {
    return (
        <main className={`h-auto bg-image-top ${poppins.className}`}>
            <section className="max-w-[76rem]  mx-auto  pt-[3rem] lg:px-0 px-4 relative z-10">
                <Image className="w-fit mx-auto" src={Logo} alt="" />
                <div className="lg:mt-[3rem] mt-[16rem] lg:max-w-full max-w-[21.4375rem] lg:mx-0 mx-auto">
                    <p className="lg:text-[1.125rem] text-[.875rem] leading-[1.75rem] text-[#FCFCFC8F] font-medium lg:text-left text-center">
                        Você vai precisar de um cérebro reserva!
                    </p>
                    <h1 className="text-[#ECF23D] lg:text-[3.5rem] text-[2rem] font-bold max-w-[39.96rem] lg:leading-[4.5rem] leading-[2.625rem] lg:text-left text-center lg:mt-0 mt-4">
                        Seu produto digital pronto para vender em 2 dias
                    </h1>
                    <p className="lg:mt-2 mt-4 text-[#FCFCFC] lg:text-[1rem] text-[.875rem] max-w-[30.5rem] lg:leading-[1.75rem] leading-[1.5rem] lg:text-left text-center">
                        Já vai sair com tudo pronto: produto, página de vendas, vídeo de vendas e anúncios, são 2 a 3 meses de trabalho feitos em apenas 2 dias. Você vai sair de lá vendendo!
                    </p>
                </div>
                <div className="w-full  lg:mt-[5.5rem] mt-[2rem] bg-[rgba(32,41,44,0.50)] backdrop-blur-sm lg:px-16 px-4 py-8 border border-[#354044] rounded-2xl text-[#FCFCFC] flex lg:flex-row flex-col justify-center  gap-8">

                    <div>
                        <p className="text-center font-medium uppercase lg:text-[1.125rem] text-[0.875rem]">
                            Edição de Abril <span className="font-bold ">- 24 e 25 de Abril</span>
                        </p>
                        <div className="p-2 border border-[#354044] rounded-lg mt-3 lg:w-fit w-full  mx-auto">
                            <a href="">
                                <button className="flex items-center justify-center gap-2 lg:w-[29.5rem] w-full bg-[#ECF23D] text-[#151E21] lg:text-[1.125rem] text-[0.875rem] font-bold uppercase py-3 rounded-[0.25rem]">
                                    <p>
                                        Quero reservar meu lugar
                                    </p>
                                    <Image src={ArrowR} alt="" />
                                </button>
                            </a>
                        </div>
                        <div className="mt-3 flex justify-center gap-[.94rem] lg:text-left text-center">
                            <div className="flex items-center gap-2 ">
                                <Image src={Location} alt="" />
                                <div>
                                    <p className="font-medium lg:text-[1.125rem] text-[0.875rem]">
                                        Brasília-DF
                                    </p>
                                    <p className="lg:text-[.675rem] text-[0.75rem]">
                                        Local a definir
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <Image src={Profile} alt="" />
                                <p className="font-medium lg:text-[1.125rem] text-[0.75rem]">
                                    Apenas 100 Vagas
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-center font-medium uppercase lg:text-[1.125rem] text-[0.875rem]">
                            Edição de outubro <span className="font-bold ">- 16 e 17 de Outubro</span>
                        </p>
                        <div className="p-2 border border-[#354044] rounded-lg mt-3 lg:w-fit w-full  mx-auto">
                            <a href="">
                                <button className="flex items-center justify-center gap-2 lg:w-[29.5rem] w-full bg-[#ECF23D] text-[#151E21] lg:text-[1.125rem] text-[0.875rem]  font-bold uppercase py-3 rounded-[0.25rem]">
                                    <p>
                                        Quero reservar meu lugar
                                    </p>
                                    <Image src={ArrowR} alt="" />
                                </button>
                            </a>
                        </div>
                        <div className="mt-3 flex justify-center gap-[.94rem] lg:text-left text-center">
                            <div className="flex items-center gap-2 ">
                                <Image src={Location} alt="" />
                                <div>
                                    <p className="font-medium lg:text-[1.125rem] text-[0.875rem]">
                                        Brasília-DF
                                    </p>
                                    <p className="lg:text-[.675rem] text-[0.75rem]">
                                        Local a definir
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 ">
                                <Image src={Profile} alt="" />
                                <p className="font-medium lg:text-[1.125rem] text-[0.75rem]">
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