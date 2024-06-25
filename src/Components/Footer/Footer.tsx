import React from 'react'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-blue-950 text-white bottom-0 w-full">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Sollarium Generation | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
              <a href='https://github.com/Projeto-integrador-Sollarium'><GithubLogo size={40} weight='bold'/></a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer