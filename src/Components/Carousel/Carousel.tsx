import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import jorgeB from '../../assets/jorgebanner.png';
import rurais from '../../assets/rurais.png';
import comercial from '../../assets/comerciais.png';
import condominio from '../../assets/condominios.png';
import residenciais from '../../assets/residenciais.png';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel(){

    return (
        <>
            <Swiper
                slidesPerView={1}
                autoplay={{delay: 2500}}
                pagination={{clickable: true,}}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={jorgeB}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={rurais}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={residenciais}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={comercial}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={condominio}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Carousel;