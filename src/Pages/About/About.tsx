import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import equipe from '../../assets/Team.png';
function Sobre(){
    return(
        <>
            <div className="bg-neutral-950 flex justify-center">
                <div className="container  grid grid-cols-2 text-white">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-8xl font-bold italic">Sobre Nós!</h2>
                    </div>
                    <div className="flex-grow justify-center">
                        <img src={equipe} alt="" className="w-2/3" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    <div>
                            <p className="text-gray-800">
                                O Sollarium é uma plataforma comprometida em promover o acesso à energia limpa e sustentável por meio do comércio eletrônico. Nosso objetivo é facilitar a transição para fontes de energia renovável, contribuindo para a redução das emissões de carbono e o combate às mudanças climáticas.
                                Atualmente, o mundo enfrenta uma crise climática sem precedentes, com as emissões de carbono atingindo níveis alarmantes. A dependência de combustíveis fósseis para geração de energia é uma das principais causas desse problema. O Sollarium surge como uma solução, oferecendo acesso fácil e conveniente a tecnologias e produtos de energia sustentável.
                            </p>
                    </div>
                    <div className="justify-center py-10">
                        <h2 className='font-bold text-center text-4xl py-2'>Nossa Equipe!</h2>
                        <hr className="border-slate-950 rounded w-full"/>
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                            <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center'>
                                <div>
                                    <img src="https://i.pinimg.com/564x/50/27/39/502739bf7c30221ef504e364907b2b23.jpg" alt="Camilla" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3 className='text-bold'>Camilla</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/caoslourenco'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/camilla-lourenco'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://i.pinimg.com/736x/72/d6/4c/72d64c72c2edc52b5d7b5ead0cb724a2.jpg" alt="Giovanna" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Giovanna</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/GiovannaTocuti'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/giovannatocuti/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://i.pinimg.com/564x/b5/9a/70/b59a708051f23cebb9debaa0e7ac716d.jpg" alt="Pedro" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Pedro</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/PedroHenrique726'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/pedro-henrique-oliveira-da-anunciacao/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://i.pinimg.com/564x/c7/b5/91/c7b59165af56d1490216649f089907e0.jpg" alt="Thais" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Thais</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/tpaiva700'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/thaisf-paiva/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://i.pinimg.com/736x/05/22/91/0522916c52a9f92a59663d60b9198618.jpg" alt="Vinicius" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Vinicius</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/vinisisantos'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/vinisisantos/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default Sobre;