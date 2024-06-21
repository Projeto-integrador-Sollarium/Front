import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Home1 from '../../assets/planet.jpeg';
import imageR from '../../assets/Team.png';
import Carousel from '../../Components/Carousel/Carousel';

function Home() {

    let navigate = useNavigate();

    return (
        <>
            <Carousel />


            <div className="grid-cols-2 bg-white shadow-md rounded-lg overflow-hidden m-5">

                <h2 className="text-left text-4xl font-bold ml-5 mt-5 mb-5 text-gray-800 font-serif">Soluções Sustentáveis</h2>

                <div className='grid grid-cols-12'>

                    <div className='col-span-6'>
                        <p className="text-xl text-gray-700 mb-2 font-serif leading-snug ml-5">
                            As fontes renováveis, como solar e eólica, oferecem uma alternativa aos combustíveis fósseis, prejudiciais ao meio ambiente e que contribuem para as mudanças climáticas.  A queima de combustíveis fósseis libera poluentes nocivos ligados a problemas de saúde como doenças respiratórias e câncer. Investir em energia limpa reduz a exposição a esses poluentes e demonstra um compromisso com o bem-estar das pessoas.
                        </p>
                        <p className="text-xl text-gray-700 mb-2 font-serif leading-snug ml-5">
                            Empresas que adotam essa mudança destacam-se como líderes em sustentabilidade e podem beneficiar-se financeiramente, seja economizando a longo prazo ou acessando novos mercados. Escolher energia limpa é uma decisão estratégica que impulsiona o crescimento sustentável e a prosperidade a longo prazo.
                        </p>
                        <p className="text-xl text-gray-700 mb-2 font-serif leading-snug ml-5">
                            A energia solar é uma fonte renovável, abundante, limpa e que não emite gases de efeito estufa ou possui impactos ambientais significativos. Além disso, a energia solar oferece uma independência energética significativa.
                        </p>
                    </div>

                    <div className='col-span-6'>
                        <div className='flex justify-center items-start'>
                            <div>
                                <img src={Home1} alt="Home1" className="flex rounded-lg w-9/12 ml-28" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 w-auto h-auto">
                    <p className="text-xl text-gray-700 ml-5 mr-5 mb-2 font-serif leading-snug">
                        Ao instalar painéis solares em locais estratégicos, o consumidor pode gerar sua própria eletricidade, reduzindo a dependência de fornecedores externos. Isso não apenas garante um suprimento confiável de energia a longo prazo, mas também pode resultar em economia de custos considerável ao longo do tempo.
                    </p>
                    <p className="text-xl text-gray-700 ml-5 mr-5 mb-8 font-serif leading-snug">
                        Outra vantagem crucial da energia solar é sua versatilidade e escalabilidade. Os sistemas solares podem ser instalados em uma variedade de locais, desde telhados de edifícios comerciais até terrenos industriais desocupados. Eles podem ser dimensionados de acordo com as necessidades específicas, desde pequenas operações, como as residenciais, até grandes instalações industriais. Essa flexibilidade torna a energia solar acessível e viável para uma ampla gama de negócios e setores, contribuindo para uma transição mais ampla para uma matriz energética mais limpa e sustentável.
                    </p>
                </div>
            </div>
            {/* Nosos serviços - explicando cada um */}
            <div className="flex items-center justify-center min-h-8 py-10 bg-orange-100">
                <div className="text-center w-full max-w-6xl">
                    <h2 className='font-bold text-4xl text-black py-2'>Nossos Serviços</h2>
                    <hr className="border-yellow-500 border-2 rounded w-1/2 mx-auto mb-8"/>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="text-center">
                            <img src={imageR} alt="Rural" className="rounded-lg w-80 h-80 mb-5"/>
                            <h3 className='font-bold'>Projetos Residenciais</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iusto quasi suscipit nihil doloremque aperiam eos a temporibus.</p>
                        </div>
                        <div className="text-center">
                            <img src={imageR} alt="Rural" className="rounded-lg w-80 h-80 mx-auto mb-5"/>
                            <h3 className='font-bold'>Projetos Residenciais</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iusto quasi suscipit nihil doloremque aperiam eos a temporibus.</p>
                        </div>
                        <div className="text-center">
                            <img src={imageR} alt="Rural" className="rounded-lg w-80 h-80 mx-auto mb-5"/>
                            <h3 className='font-bold'>Projetos Residenciais</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iusto quasi suscipit nihil doloremque aperiam eos a temporibus.</p>
                        </div>
                        <div className="text-center">
                            <img src={imageR} alt="Rural" className="rounded-lg w-80 h-80 mx-auto mb-5"/>
                            <h3 className='font-bold'>Projetos Residenciais</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi iusto quasi suscipit nihil doloremque aperiam eos a temporibus.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Texto convidando para ver os produtos */}
            <div className="flex justify-center items-center mt-10">
                <p className="text-center text-lg text-gray-800 font-bold font-serif">
                    Venha conhecer nossos produtos e descubra como podemos ajudá-lo(a) a adotar uma abordagem mais sustentável!
                </p>
            </div>

            {/* Botão para /products */}
            <div className="flex justify-center items-center mt-5 py-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/products')}>
                    Ver Produtos
                </button>
            </div >
        </>
    )
}

export default Home;
