// 'use client'
import SliderSwiper from "#/components/Swiper/SliderSwiper";
import CardTruck from "#/components/Cards/CardTruck";
import Section from "#/components/Sections/Section";
import {Suspense} from "react";
import Link from "next/link";
import {Loader} from "#/components/Loader/Loader";

const SlidePanel = (props) => {

	const {data} = props;
	return (
		<Suspense fallback={<Loader />}>
			{data && data.length > 0 ?
				<SliderSwiper items={data.map((item, index) =>
					<CardTruck
						container
						view={false}
						// icon={<ReadMore fontSize={"large"} width={24} height={24}/>}
						key={index}

						attributes={item.attributes}/>)}
					/>
				: <Loader />}
		</Suspense>
	)
}
const SectionInstock =  ({items}) => {
	// const {
	// 	data,
	// 	loading,
	// } = useFetchData(Trucks, 'Trucks', {limit: 10});
	//
	// const [truckData, setTruckData] = useState({
	//
	// });
	//
	//
	// useEffect(() => {
	//
	// 	if(!loading) {
	// 		// console.log('axios', data, loading)
	// 		setTruckData(data);
	// 	}
	//
	// }, [!loading])
	//
	//
	// console.log(items)
	return (
		<Section
			title={'Техника В НАЛИЧИИ'}
			type={`section-instock `}
			content={<div className={'section__cards section__cards-tabbed'}>
				<div className={`tab tab-instock active`}>
					<Suspense fallback={<Loader />}>
						<SlidePanel
							// @ts-ignore
							data={items.data} />
					</Suspense>
				</div>
			</div>}
			tabbar={
			<ul className={'flex gap-4'}>
				<li><a className={`button button-link active`}>В наличии</a> </li>
				<li><Link className={`button button-link`} href={'/trucks'}>Каталог техники</Link> </li>
			</ul>
				}

		/>

	)
}
export default SectionInstock