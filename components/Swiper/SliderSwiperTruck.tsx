'use client'
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import {FreeMode, Navigation, Pagination, Thumbs} from "swiper";
import {useState} from "react";
import Image from "next/image";

const SliderSwiperTruck = (props: any) => {
    //ts-ignore
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const items = props.items.map((item, index) => <Image className={"h-full"} style={{objectFit: 'cover'}}
     width={item.attributes.width}
      height={item.attributes.height}
       key={index}
                                                              src={`https://a.tdural1.ru${item.attributes.url}`}
                                                              alt={''}/>)
    // console.log(items)
    const [mobile, setMobile] = useState(true);

    return (<>
    {/*<div className={"swiper__img relative overflow-hidden flex"}>*/}
            <Swiper
                // slidesPerView={1}
                // spaceBetween={32}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Pagination, Navigation, FreeMode, Thumbs]}
                className="mySwiper2 mySwiperTruck2 relative pb-8 xl:pb-0"
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                // breakpoints={{
                // 	768: {
                // 		slidesPerView: 2,
                // 		spaceBetween: 16,
                // 	},
                // 	1024: {
                // 		slidesPerView: 3,
                // 		spaceBetween: 16,
                // 	},
                // 	1240: {
                // 		slidesPerView: 3,
                // 		spaceBetween: 32,
                // 	},
                // 	1536: {
                // 		slidesPerView: 4,
                // 		spaceBetween: 32,
                // 	},
                //
                //
                // }}
            >
                {items.map((child: any, index: string) => <SwiperSlide  key={index}>{child}</SwiperSlide>)}
            </Swiper>
        {/*</div>*/}
        {/*<div className={'swiper__thumbs  relative overflow-hidden'}>*/}

            <Swiper
                direction={"vertical"}
                onSwiper={setThumbsSwiper}
                // loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mySwiperTruck"
            >{items.map((child: any, index: string) => <SwiperSlide key={`nyg-${index}`}>{child}</SwiperSlide>)}</Swiper>
        {/*</div>*/}
        </>);
};

export default SliderSwiperTruck