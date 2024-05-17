import Image from "next/image";
import Note from "public/images/DeviceMockup.png"
import Leandro from "public/images/duvidas-1.png"
import Ruy from "public/images/duvidas-2.png"
import Vitor from "public/images/duvidas-3.png"
import LeandroM from "public/images/duvidas-1-m.png"
import RuyM from "public/images/duvidas-2-m.png"
import VitorM from "public/images/duvidas-3-m.png"
import Check from "public/icons/check.svg"

export default function Recomend() {
    return (
        <main className="bg-[#151E21]">

            <section className="bg-gradient-caderninho w-full sm:px-4 mm:px-8">
                <div className="flex sm:flex-col justify-center">
                    <div className="max-w-[31.0625rem] sm:max-w-[21.4375rem] py-[2.28rem] sm:pt-12 sm:pb-8">
                        <h1 className="text-[#EEEC21] text-[3rem] sm:text-[1.75rem] font-bold ">
                            Proibido caderninho bagunçado
                        </h1>
                        <div className="text-[#FCFCFC] sm:text-[.875rem] leading-7 sm:leading-6 mt-8 sm:mt-4">
                            <p>
                                Todo o processo de criação é feito com a ajuda do aplicativo de implementação do VTSD: o Appbumper. Você vai criar o produto, os anúncios, as páginas e todo o seu processo de marketing em um só lugar. É impossível ficar perdido e sem entender qual é o próximo passo.
                            </p>
                            <p>
                                É praticamente preencher os formulários.
                            </p>
                        </div>
                    </div>
                    <Image src={Note} alt="" />
                </div>
            </section>

            <section className="pt-[10rem] sm:pt-12">
                <div className="bg-gradient-proibido p-[1px] w-fit mx-auto">
                    <div className="bg-gradient-proibido-over rounded-[2rem] py-14 sm:py-12 px-12 sm:px-4 flex sm:flex-col mm:flex-col items-center gap-16 sm:gap-12">
                        <div className="flex  gap-2 sm:hidden">
                            <Image src={Leandro} alt="" />
                            <Image src={Ruy} alt="" />
                            <Image src={Vitor} alt="" />
                        </div>
                        <div className="sm:flex flex-col gap-2  hidden">
                            <Image src={LeandroM} alt="" />
                            <Image src={RuyM} alt="" />
                            <Image src={VitorM} alt="" />
                        </div>
                        <div className="sm:max-w-[19.375rem]">
                            <h1 className="text-[#75979B] text-[3rem] sm:text-[1.75rem] font-bold leading-[4rem] sm:leading-9 max-w-[20.25rem]">
                                Proibido sair com dúvidas
                            </h1>
                            <p className="mt-6 sm:mt-4 text-[#FCFCFC] sm:text-[.875rem] max-w-[24.25rem] leading-7 sm:leading-6">
                                Durante o processo de criação você vai receber orientação e feedback. Para cada 30 minutos de explicação de qualquer conceito, deixamos 1h30 de implementação prática. Enquanto isso, o time vai passar nas mesas, tirando dúvidas e passando feedbacks sobre a implementação de maneira individual.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sm:hidden mt-[10rem] max-w-[75.9rem] mx-auto pb-20 mm:px-8">
                <h1 className="text-[#ECF23D] text-[3rem] font-bold text-center">
                    Para quem o Retiro é recomendado
                </h1>

                <div className="mt-12 flex gap-4">

                    <div className="text-[#FCFCFC] leading-7 flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem ainda não está no VTSD e já quer entrar de cabeça
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Qualquer pessoa que quer ter um produto digital
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Produtores digitais que só fazem lançamento, mas querem entrar no perpétuo
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Para quem está enrolando meses e meses e ainda não colocou
                                    seu produto para rodar
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Alunos do VTSD que ainda não entraram em ação
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Professores e especialistas
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
                                <Image src={Check} alt="" />
                                <p>
                                    Alunos do VTSD que já começaram a fazer suas primeiras vendas mas querem ir mais longe
                                </p>
                            </div>
                            <div className="flex items-center gap-4 py-3 px-2 max-w-[36rem] w-full bg-[#20292C] border border-[#354044] rounded-2xl">
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