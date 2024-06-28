import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react';
import equipe from '../../assets/Team.png';
function Sobre(){
    return(
        <>
            <div className="flex justify-center px-4">
                <div className="container grid grid-cols-1 md:grid-cols-2 ">
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-7xl md:text-5xl lg:text-7xl font-bold text-green-700 italic">Sobre Nós!</h2>
                    </div>
                    <div className="flex justify-center py-4">
                        <img src={equipe} alt="equipe" className="w-full md:w-2/3" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-10">
                <div className="gap-8">
                    <div>
                            <p className="text-gray-800 text-base md:text-lg text-justify">
                                O Sollarium é uma plataforma comprometida em promover o acesso à energia limpa e sustentável por meio do comércio eletrônico. Nosso objetivo é facilitar a transição para fontes de energia renovável, contribuindo para a redução das emissões de carbono e o combate às mudanças climáticas.
                                Atualmente, o mundo enfrenta uma crise climática sem precedentes, com as emissões de carbono atingindo níveis alarmantes. A dependência de combustíveis fósseis para geração de energia é uma das principais causas desse problema. O Sollarium surge como uma solução, oferecendo acesso fácil e conveniente a tecnologias e produtos de energia sustentável.
                            </p>
                    </div>
            </div>
                    <div className="flex flex-col items-center py-10">
                        <h2 className='font-bold text-center text-green-700 text-4xl py-2'>Nossa Equipe!</h2>
                        <hr className="border-slate-950 rounded w-full my-4"/>
                        <div className="container mx-auto px-4">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center'>
                                <div>
                                    <img src="https://media.licdn.com/dms/image/D4D03AQFtaIAziJSeZA/profile-displayphoto-shrink_800_800/0/1696206142141?e=1721260800&v=beta&t=pedvCzWqx_6B2ZdSal_cgSrP8OzosViFlSx0yDLBgKw" alt="Camilla" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3 className='text-bold'>Camilla</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/caoslourenco'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/camilla-lourenco'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://media.licdn.com/dms/image/D4D03AQEB8HV8XXLZmw/profile-displayphoto-shrink_800_800/0/1708730294339?e=1721260800&v=beta&t=Wd8FTi_mz3Un1PFxeZTo_QcX7R7EcSKxmRunTBsi1gQ" alt="Giovanna" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Giovanna</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/GiovannaTocuti'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/giovannatocuti/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://media.licdn.com/dms/image/C4E03AQECbviPV0_nGQ/profile-displayphoto-shrink_800_800/0/1653518274628?e=1721260800&v=beta&t=0GXO1KmKzSjcRsfT5OTwuOYhRlW1SYnEy4KqyYh6-sU" alt="Pedro" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Pedro</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/PedroHenrique726'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/pedro-henrique-oliveira-da-anunciacao/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://media.licdn.com/dms/image/D4D03AQGn--vpWfcJ4w/profile-displayphoto-shrink_800_800/0/1713488061986?e=1721260800&v=beta&t=9Tmv5I6XYsXl_cjsaysaFc4_ib199qGqvxko18HAbRg" alt="Thais" className="rounded-full w-36 h-36 mx-auto mb-2"/>
                                    <h3>Thais</h3>
                                    <div className='flex justify-center gap-2 py-1'>
                                        <a href='https://github.com/tpaiva700'><GithubLogo size={40} weight='bold'/></a>
                                        <a href='https://www.linkedin.com/in/thaisf-paiva/'><LinkedinLogo size={40} weight='bold'/></a>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://media.licdn.com/dms/image/D4D03AQE9o0DZkybHxg/profile-displayphoto-shrink_800_800/0/1708650627463?e=1721260800&v=beta&t=oYxpgyjPpQJ9jLoCk2Axvs34fMg1tX3oPt-08ENhUkU" alt="Vinicius" className="rounded-full w-36 h-36 mx-auto mb-2"/>
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
            
        </>
    )
}

export default Sobre;