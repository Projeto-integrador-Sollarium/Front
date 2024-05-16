import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Home1 from '../../assets/Home1.png';
import Home2 from '../../assets/home2.png';
import Carousel from '../../Components/Carousel/Carousel';

function Home() {

    let navigate = useNavigate();

    return (
        <>
            <Carousel />
            <div className='flex justify-center items-center mt-10'>
                <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="w-2/6 p-2">
                        <img src={Home1} alt="Home1" className="w-full h-auto" />
                    </div>
                    <div className="w-4/6 p-6 text-right">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800 font-serif">Da Poluição ao Progresso</h2>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed font-serif">
                            A opção pela energia limpa é crucial para qualquer empresa. As fontes renováveis, como solar e eólica, oferecem uma alternativa aos combustíveis fósseis, prejudiciais ao meio ambiente e contribuem para as mudanças climáticas. Optar por energias não renováveis prejudica a reputação da empresa em termos de responsabilidade ambiental e pode resultar em custos adicionais devido a regulamentações e impostos sobre emissões de carbono.
                        </p>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed font-serif">
                            Além disso, a saúde dos funcionários e da comunidade é uma preocupação crescente. A queima de combustíveis fósseis libera poluentes nocivos, ligados a problemas de saúde como doenças respiratórias e câncer. Investir em energia limpa reduz a exposição a esses poluentes e demonstra um compromisso com o bem-estar das pessoas.
                        </p>

                        <p className="text-lg text-gray-700 mb-4 leading-relaxed font-serif">
                            A transição para a energia limpa é não apenas uma necessidade ambiental, mas também uma oportunidade econômica. Setores como energia solar e eólica estão crescendo e oferecem espaço para investimentos e inovação. Empresas que adotam essa mudança destacam-se como líderes em sustentabilidade e podem beneficiar-se financeiramente, seja economizando a longo prazo ou acessando novos mercados. Escolher energia limpa é uma decisão estratégica que impulsiona o crescimento sustentável e a prosperidade a longo prazo.
                        </p>

                    </div>


                </div>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className="flex bg-white shadow-md rounded-lg overflow-hidden">

                    <div className="w-4/6 p-6 text-left">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800 font-serif">Energia Limpa</h2>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed font-serif">
                            A energia solar emerge como uma solução poderosa para os desafios apresentados pelas energias não limpas. Primeiramente, ela é uma fonte renovável e abundante, com o sol fornecendo uma quantidade inesgotável de energia diariamente. Ao contrário dos combustíveis fósseis, cuja extração e queima geram poluição e emissões de carbono, a energia solar é limpa e não emite gases de efeito estufa, ajudando a mitigar as mudanças climáticas e a preservar o meio ambiente.
                        </p>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed font-serif">
                            Além disso, a energia solar oferece uma independência energética significativa. Ao instalar painéis solares em locais estratégicos, empresas podem gerar sua própria eletricidade, reduzindo a dependência de fornecedores externos e protegendo-se contra flutuações nos preços dos combustíveis fósseis. Isso não apenas garante um suprimento confiável de energia a longo prazo, mas também pode resultar em economia de custos considerável ao longo do tempo.
                        </p>
                        <p className="text-lg text-gray-700 mb-4 leading-relaxed font-serif">
                            Outra vantagem crucial da energia solar é sua versatilidade e escalabilidade. Os sistemas solares podem ser instalados em uma variedade de locais, desde telhados de edifícios comerciais até terrenos industriais desocupados. Eles podem ser dimensionados de acordo com as necessidades específicas de cada empresa, desde pequenas operações até grandes instalações industriais. Essa flexibilidade torna a energia solar acessível e viável para uma ampla gama de negócios e setores, contribuindo para uma transição mais ampla para uma matriz energética mais limpa e sustentável.
                        </p>
                    </div>
                    <div className="w-2/6 p-2">
                        <img src={Home2} alt="Home2" className="" />
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
    );
}

export default Home;
