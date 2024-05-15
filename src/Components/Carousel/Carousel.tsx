import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

function Carousel(){
    var items = [
        {img: "https://media.discordapp.net/attachments/1217967830511779930/1239938556760424600/banner1.png?ex=6644be44&is=66436cc4&hm=832701ce640ab505e0e089441eb18fbf77ca22e284d7b756a5f999cc7e4c77d6&=&format=webp&quality=lossless&width=1100&height=275"},
        {img: "https://media.discordapp.net/attachments/1217967830511779930/1239961652275970079/banner5.png?ex=6644d3c7&is=66438247&hm=7f57aeacfd6076a86143e50600f4de20eb96624cd91bf18839107ef4c1ef91dc&=&format=webp&quality=lossless&width=1100&height=275"},
        {img: "https://media.discordapp.net/attachments/1217967830511779930/1239961652674166864/banner4.png?ex=6644d3c7&is=66438247&hm=c57305786ae38700282a11d846ebe8d9629805e350a07bd4916284ec3b5a6efd&=&format=webp&quality=lossless&width=1100&height=275"},
        {img: "https://media.discordapp.net/attachments/1217967830511779930/1239961653085343816/banner3.png?ex=6644d3c7&is=66438247&hm=5de4a790e1c0e37c9a9a6a9c8a7ebd968504c98afa1dbd33ba33dbb798985238&=&format=webp&quality=lossless&width=1100&height=275"},
        {img: "https://media.discordapp.net/attachments/1217967830511779930/1239961653370683473/banner2.png?ex=6644d3c7&is=66438247&hm=a3892552a31846a52b430d78824a55d871d8422366e961dafd9989ba0d741fb8&=&format=webp&quality=lossless&width=1100&height=275"},
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