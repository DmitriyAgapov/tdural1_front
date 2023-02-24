'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const SliderSwiper = (props: any) => {
	// console.log(props.items)
	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={24}
			freeMode={true}
			watchSlidesProgress={true}
			// pagination={{
			// 	clickable: true,
			// }}
			// freeMode={true}
			modules={[ Pagination]}
			// onSlideChange={() => console.log('slide change')}
			// onSwiper={(swiper) => console.log(swiper)}
			breakpoints={{
				768: {
					slidesPerView: 2,
					spaceBetween: 16,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 16,
				},
				1240: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
				1536: {
					slidesPerView: 4,
					spaceBetween: 24,
				},


			}}
		>
			{props.items.map((child: any, index: string) => <SwiperSlide key={index}>{child}</SwiperSlide>)}
		</Swiper>
	);
};

export default SliderSwiper