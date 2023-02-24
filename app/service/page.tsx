import getData from "#/utils/getData";
import {ServiceAndCategories} from "#/utils/gql/service"
import React, {Suspense} from "react";
import CardService from "#/components/Cards/CardService";
import {SectionDescription} from "#/components/Sections/Section";
import {Loader} from "#/components/Loader/Loader";
import {notFound} from "next/navigation";
export default async function Page() {
	const data = getData(ServiceAndCategories, {}, true);
	const {data: {serviceCategories, services}} = await data;
	if (!services) {
		notFound();
	}
	const cars = services.data.map((item, index) => <CardService title={item.attributes.title} price={item.attributes.price} item={item} id={item.id} key={index}/>)

	return (<>

		{/*<SectionHeading heading={'Сервис'} />*/}
		<div className={'section__description flex align-bottom'}>
			<SectionDescription description={<>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</>}/>
		</div>

		<Suspense fallback={<Loader />}>
			{cars}
		</Suspense>
		{}
	</>)
}


export const dynamic = 'force-dynamic'