import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import HomeImg from '../../assets/Home.png';
import Carousel from '../../Components/Carousel/Carousel';

function Home(){
  

    return(
        <div className='flex justify-center items-center'>
                <Carousel />
        </div>
    );
}

export default Home;