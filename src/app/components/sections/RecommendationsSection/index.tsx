import Image from "next/image";
import Note from "public/retirovtsd-b/images/DeviceMockup.webp"
import NoteM from "public/retirovtsd-b/images/DeviceMockup-mob.webp"
import Leandro from "public/retirovtsd-b/images/duvidas-1.webp"
import Ruy from "public/retirovtsd-b/images/duvidas-2.webp"
import Vitor from "public/retirovtsd-b/images/duvidas-3.webp"
import LeandroM from "public/retirovtsd-b/images/duvidas-1-m.webp"
import RuyM from "public/retirovtsd-b/images/duvidas-2-m.webp"
import VitorM from "public/retirovtsd-b/images/duvidas-3-m.webp"
import Check from "public/retirovtsd-b/icons/check.svg"
import { Poppins } from "next/font/google";


const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
})


export default function Recomend() {
    return (
        <main className={`bg-[#151E21] ${poppins.className}`}>

            <section className="bg-gradient-caderninho  w-full overflow-x-hidden">
                <div className="max-w-[82rem] mx-auto">
                    <div className="flex lg:flex-row flex-col items-center gap-8 lg:py-[5rem] pt-12 pb-8">
                        <div className="lg:max-w-[31.4625rem] max-w-[19.4375rem]">
                            <h1 className="text-[#EEEC21] lg:text-[2.625rem] text-[1.5rem] lg:leading-[3rem] leading-[2rem] font-bold ">
                                Nada de caderninho bagunçado
                            </h1>
                            <div className="text-[#FCFCFC]  lg:mt-8 mt-4">
                                <p className="font-semibold lg:text-[1.5rem] text-[1.125rem] lg:leading-8 leading-7">
                                    Todo o processo de criação é feito com a ajuda do aplicativo de implementação do VTSD: o Appbumper.
                                </p>
                                <p className="lg:text-[1.125rem] text-[.875rem] lg:leading-8 leading-7 mt-6">
                                    Você vai criar o produto, os anúncios, as páginas e todo o seu processo de marketing em um só lugar. É impossível ficar perdido e sem entender qual é o próximo passo.
                                </p>
                            </div>
                        </div>
                        <Image className="lg:block hidden" src={Note} alt="" />
                        <Image className="lg:hidden" src={NoteM} alt="" />
                    </div>
                </div>
            </section>

            <section className="pt-[6rem] ">

                <div className="bg-gradient-proibido rounded-[2rem] lg:py-14 py-6 lg:px-12 px-4 flex lg:flex-row flex-col-reverse  lg:gap-16 gap-8 w-fit mx-auto">
                    <div className="lg:flex  gap-2 hidden">
                        <Image src={Leandro} alt="" />
                        <Image src={Ruy} alt="" />
                        <Image src={Vitor} alt="" />
                    </div>
                    <div className="flex flex-col gap-2  lg:hidden">
                        <Image src={LeandroM} alt="" />
                        <Image src={RuyM} alt="" />
                        <Image src={VitorM} alt="" />
                    </div>
                    <div className="lg:max-w-full max-w-[19.375rem]">
                        <h1 className="text-[#ECF23D] lg:text-[2.625rem] text-[1.5rem] font-bold lg:leading-[3rem] leading-8 max-w-[20.25rem]">
                            Proibido sair com dúvidas
                        </h1>
                        <div className="lg:mt-8 mt-[1.31rem] text-[#FCFCFC]  max-w-[24.25rem]">
                            <p className="lg:text-[1.5rem] text-[1.125rem] lg:leading-[2rem] leading-7 font-semibold">
                                Durante o processo de criação você vai receber orientação e feedbacks.
                            </p>
                            <p className="lg:text-[1.125rem] text-[.875rem] lg:leading-[1.75rem] leading-7 lg:mt-8 mt-[1.31rem]">
                                Para cada 30 minutos de explicação de qualquer conceito, deixamos 1h30 de implementação prática. Enquanto isso, o time vai passar nas mesas, tirando dúvidas e passando feedbacks sobre a implementação de maneira individual.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className=" lg:mt-[10rem] mt-[6rem] lg:max-w-[75.9rem] max-w-[21.4375rem] mx-auto pb-12 ">
                <h1 className="text-[#ECF23D] lg:text-[3rem] text-[1.5rem] lg:leading-[3rem] leading-[2rem] font-bold text-center">
                    Para quem o Retiro é recomendado
                </h1>

                <div className="lg:mt-12 mt-8">

                    <div className="text-[#FCFCFC] lg:text-[1.125rem] text-[0.875rem leading-[1.75rem] flex flex-col gap-4 font-medium">
                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem está enrolando meses e meses e ainda não colocou seu produto para rodar
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Qualquer pessoa que quer ter um produto digital
                                </p>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem está enrolando meses e meses e ainda não colocou seu produto para rodar
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem está enrolando meses e meses e ainda não colocou seu produto para rodar
                                </p>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem está enrolando meses e meses e ainda não colocou seu produto para rodar
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Professores e especialistas
                                </p>
                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-4">
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem está enrolando meses e meses e ainda não colocou seu produto para rodar
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 lg:px-6 px-4 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Agências, lançadores e co-produtores
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


        </main>
    )
}