import React from 'react';
import { Link } from 'react-router-dom'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sollarium Generation</h1>
            <p className="mt-2">&copy; {new Date().getFullYear()} Sollarium Generation. Todos os direitos reservados.</p>

            <div className="flex justify-center lg:justify-start mt-4 space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <LinkedinLogo size={32} weight="bold" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <InstagramLogo size={32} weight="bold" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <FacebookLogo size={32} weight="bold" />
              </a>
              <Link to="/Projeto-integrador-Sollarium" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                <GithubLogo size={32} weight="bold" />
              </Link>
            </div>

            <div className="mt-4 text-center lg:text-left">
              <a href="/privacidade" className="hover:text-gray-400">Política de Privacidade</a>
            </div>
          </div>

          <nav className="flex flex-col lg:flex-row items-center lg:items-end lg:w-1/3 ">
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
              <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-gray-400">Sobre</Link></li>
              <li><Link to="/TrabalheConosco" className="hover:text-gray-400">Trabalhe Conosco</Link></li>
              <li><Link to="/Contato" className="hover:text-gray-400">Contato</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
