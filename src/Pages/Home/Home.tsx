import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Home1 from '../../assets/homem2.png';
import imageR from '../../assets/Team.png';
import Carousel from '../../Components/Carousel/Carousel';

function Home() {

    let navigate = useNavigate();

    return (
        <>                  
            
        <Carousel />
        <div className='container mx-56 px-4'>
            <div className="container flex flex-col items-center ">

                <h2 className="text-center py-14 text-4xl font-bold mt-5 mb-5 text-green-700 font-serif">Soluções Sustentáveis</h2>

                <div className='flex justify-between items-start w-full'>

                    <div className='w-1/2 pr-4 '>
                        <p className="text-2xl text-gray-700 mb-2 font-serif leading-snug ml-20">
                        Fontes renováveis como solar e eólica oferecem alternativas aos combustíveis fósseis, que poluem e causam mudanças climáticas. A queima de fósseis libera poluentes nocivos, associados a problemas de saúde. Investir em energia limpa reduz essa exposição e demonstra um compromisso com o bem-estar das pessoas.
                        </p>
                        <p className="text-2xl text-gray-700 mb-2 font-serif leading-snug ml-20">
                        Empresas que adotam energia limpa se destacam em sustentabilidade e podem se beneficiar financeiramente, economizando e acessando novos mercados. A energia solar, em especial, é abundante, limpa e reduz a dependência de fornecedores externos, além de oferecer economia e independência energética.
                        </p>
                        <p className="text-2xl text-gray-700 mb-2 font-serif leading-snug ml-20">
                        Sistemas solares são versáteis e escaláveis, adequados para diversos locais e necessidades, tornando a energia solar uma opção acessível para diversos setores e promovendo uma matriz energética mais sustentável.
                        </p>
                    </div>

                    <div className='w-1/2 flex -ml-20'>
                        <img src={Home1} alt="Home1" className="rounded-lg w-9/12 " />
                    </div>
                       
                </div>
  
                
            </div>
            {/* Nosos Projetos - explicando cada um */}
            <div className=" container mx-auto px-4 flex justify-center  min-h-8 py-10 m-5">
                <div className="text-center w-full max-w-5xl">
                    <h2 className='font-bold text-4xl text-green-800 py-4'>Conheça Nossos Projetos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
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
                    </div>
                </div>
            </div>

            {/* Nosos serviços - explicando cada um */}
            <div className="container mx-auto px-4 flex justify-center  min-h-8 py-10">
                <div className="text-center w-full max-w-6xl">
                    <h2 className='font-bold text-4xl text-green-800 py-4'>Nossos Serviços</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
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
                    </div>
                </div>
            </div>

            {/* Texto convidando para ver os produtos */}
            <div className="container mx-auto px-4 flex justify-center items-center mt-10">
                <p className="text-center text-lg text-gray-800 font-bold font-serif">
                    Venha conhecer nossos produtos e descubra como podemos ajudá-lo(a) a adotar uma abordagem mais sustentável!
                </p>
            </div>

            {/* Botão para /products */}
            <div className="container mx-auto px-4 flex justify-center items-center mt-5 py-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/products')}>
                    Ver Produtos
                </button>
            </div >
        </div>
        </>
    )
}

export default Home;
