import Image from "next/image";
import Faq from "../../FaqAcordion";
import Ban from "public/icons/ban.svg"
import BanM from "public/icons/ban-mobi.svg"
import Logo from "public/icons/logo-ready-to-go.svg"

export default function FaqSection(){
    return(
        <main className="bg-[#151E21]">
            <section className="bg-gradient-faq sm:bg-none py-20 sm:py-12 mm:px-8">
                <div className="max-w-[73.9375rem] sm:max-w-[21.4375rem] mx-auto">
                    <h1 className="text-[#FCFCFC] text-[3rem] sm:text-[1.75rem] font-bold">
                    Dúvidas Frequentes
                    </h1>
                    <Faq />
                </div>
            </section>

            <section className="bg-image-bottom w-full py-[10rem] mm:pt-8 sm:pt-12 mm:px-8">
                <div className="max-w-[75.9rem] sm:max-w-[21.4rem] flex flex-col items-end sm:items-center mx-auto sm:pb-[15rem]">
                    <div className="flex items-center gap-6 sm:gap-4 max-w-[30.5625rem]">
                        <Image className="sm:hidden" src={Ban} alt=""/>
                        <Image className="sm:block hidden" src={BanM} alt=""/>
                        <p className="text-white text-[1.75rem] sm:text-[1.5rem] leading-[2.25rem] sm:leading-[2rem] font-medium">
                        Ir ao {" "} <strong>Retiro VTSD</strong> pode causar insônia por pelo menos {" "} <strong>3 dias seguidos</strong>
                        </p>
                    </div>
                    <div className="max-w-[30.5625rem] text-white mt-8 mm:mt-4">
                        <p className="text-[1.75rem] font-bold">
                        Programação do retiro
                        </p>
                        <p className="mt-2">
                        O evento começa às 9h da manhã e não tem hora para terminar. Eu não divulgo em detalhes o que acontece no retiro. O que aconteceu lá, fica por lá. Se eu for descrever em detalhes a intensidade da coisa, metade desistiria. Esqueça a programação e foque no objetivo: colocar seu produto para vender, e vender muito. Depois você vai ter muito tempo e dinheiro para descansar. 
                        </p>
                    </div>
                </div>
            </section>
            <footer className="py-8 sm:py-12 px-20 sm:px-4">
                <div className="flex sm:flex-col sm:items-center sm:gap-4 justify-between text-white text-[.75rem] font-semibold opacity-30">
                    <p>
                    © 2023 Ready To Go. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-1">
                        <p>
                        Designed by  
                        </p>
                        <Image src={Logo} alt=""/>
                    </div>
                </div>
            </footer>
        </main>
    )
}