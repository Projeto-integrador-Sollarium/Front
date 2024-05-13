import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel(){
    var items = [
        {img: "https://wallpapercave.com/wp/wp1809899.jpg"},
        {img: "https://wallpapercave.com/wp/wp2162463.png"},
        {img: "https://wallpapercave.com/wp/wp1993771.png"},
    ] 

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
                {items.map((item) => (
                    <SwiperSlide>
                        <img src={item.img} alt="Imagens Banners" />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </>
    )
}

export default Carousel;