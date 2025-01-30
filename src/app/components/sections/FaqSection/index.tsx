import Image from "next/image";
import Faq from "../../FaqAcordion";
import Ban from "public/retirovtsd-b/icons/ban.svg"
import BanM from "public/retirovtsd-b/icons/ban-mobi.svg"
import Logo from "public/retirovtsd-b/icons/logo-ready-to-go.svg"
import { Poppins } from "next/font/google";



const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})


export default function FaqSection() {
    return (
        <main className={`bg-[#151E21] ${poppins.className}`}>
            <section className="bg-gradient-faq  lg:py-24 py-12 ">
                <div className="lg:max-w-[73.9375rem] max-w-[21.4375rem] mx-auto">
                    <h1 className="text-[#FCFCFC] lg:text-[3rem] lg:leading-[3rem] text-[1.75rem] leading-[2rem] font-bold">
                        Dúvidas Frequentes
                    </h1>
                    <Faq />
                </div>
            </section>

            <section className="bg-image-bottom w-full lg:py-[10rem] pt-[3rem] pb-[26rem] ">
                <div className="lg:max-w-[75.9rem] max-w-[21.4375rem] flex flex-col lg:items-end items-center mx-auto">
                    <div className="bg-container-bottom lg:py-12 lg:px-8 max-w-[30.5625rem]">
                        <div className="text-[#FCFCFC]">
                            <p className="lg:text-[2.625rem] text-[1.5rem] lg:leading-[3rem] leading-8 font-bold">
                                Você vai precisar de um cérebro reserva
                            </p>
                            <p className="lg:mt-6 mt-2 lg:text-[1.125rem] text-[0.875rem] leading-7 font-medium">
                                O evento começa às 9h da manhã e não tem hora para terminar. Eu não divulgo em detalhes o que acontece no retiro. O que aconteceu lá, fica por lá. Se eu for descrever em detalhes a intensidade da coisa, metade desistiria. Esqueça a programação e foque no objetivo: colocar seu produto para vender, e vender muito. Depois você vai ter muito tempo e dinheiro para descansar.
                            </p>
                        </div>
                        <div className="flex items-center lg:gap-6 gap-4 max-w-[30.5625rem] lg:mt-10 mt-8">
                            <Image className="lg:block hidden" src={Ban} alt="" />
                            <Image className="lg:hidden" src={BanM} alt="" />
                            <p className="text-[#FCFCFC] lg:text-[1.5rem] text-[1.125rem] lg:leading-[2rem] leading-[1.75rem] font-semibold">
                                Ir ao Retiro VTSD pode causar insônia por pelo menos 3 dias seguidos
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <footer
                className={` py-8  bg-[#151E21]`}
            >
                <div
                    className={`lg:text-[.75rem] text-[0.625rem] font-medium lg:max-w-[76rem] mx-auto lg:text-left text-center text-[#656565] flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-4 `}
                >
                    <p className="lg:max-w-[76rem] max-w-[15.5rem]">
                        Todos os direitos reservados. Ready To Go. CNPJ: 37.643.030/0001-26
                    </p>
                    <div className="flex items-center lg:gap-2 gap-2 text-[.75rem] font-bold underline">
                        <a href="" target='_blank'>
                            <p>Política de Privacidade</p>
                        </a>
                        <p>|</p>
                        <a href="" target='_blank'>
                            <p>Termos de Uso</p>
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}