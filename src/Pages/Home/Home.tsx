import React, { useContext } from 'react';

import { UserContext } from '../../Contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

import HomeImg from '../../assets/Home.png';

function Home(){
  

    return(
        <div className='flex justify-center items-center'>
            <div>
               
                <img src={HomeImg} alt="Jorge" className='w-30'/>
             
            </div>
        </div>
    );
}

export default Home;