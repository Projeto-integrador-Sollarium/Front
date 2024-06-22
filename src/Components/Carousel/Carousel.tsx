import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import jorgeB from '../../assets/jorgebanner.png';
import  banner  from '../../assets/banner1.jpg';
import  banner2  from '../../assets/banner2.jpg';
import  banner3  from '../../assets/banner3.jpg';
import  banner4  from '../../assets/banner4.jpg';
import  banner5  from '../../assets/banner5.jpg';
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
                    <img src={banner}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5}/>
                </SwiperSlide>
            </Swiper>
        
        </>
    )
}

export default Carousel;