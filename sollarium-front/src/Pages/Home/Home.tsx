import React, { useContext } from 'react';

import { UserContext } from '../../Contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

import HomeImg from '../../assets/Home.png';

function Home(){
    const { name, setName } = useContext(UserContext);

    return(
        <div className='flex justify-center items-center'>
            <div>
                <h2 className="text-slate-900 text-4xl ">Ola user : {name}</h2>
                <img src={HomeImg} alt="Jorge" className='w-30'/>
                <Link to="/login" className="my-4 rounded bg-indigo-400 hover:bg-indigo-900 text white w-1/2 py-2 flex justify-center">Voltar</Link>
            </div>
        </div>
    );
}

export default Home;