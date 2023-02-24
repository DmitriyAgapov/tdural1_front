import React from "react";
import Aside from "#/components/Nav/Aside";
import getData from "#/utils/getData";
import {PartsAndCategories, PartsCategories} from "#/utils/gql/parts";
import Section from "#/components/Sections/Section";
import {PartsSVGMD} from "#/components/Icons";
import CardParts from "#/components/Cards/CardParts";


type PageProps = {
	params?: any;
	children?: React.ReactNode;
};
export default async function PartsLayoutLayout({ children, params }: PageProps)  {
	const data = getData(PartsCategories, {url: params.url});
	const {data: {partsCategories, current}} = await data;
	// console.log(current)
	// console.log('partsCat',partsCategories)
	// console.log('parts',current)
	// console.log('params', params)
	return (
		<Section
			title={'Запасные части'}
			icon={<PartsSVGMD />}
			type={'page page-parts'}
			heading={'Двигатель УРАЛ'}
			description={<div className={'section__description'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd.</div> }
			aside={<Aside path={'/parts'}  menuItems={partsCategories.data}/>}
			content={<div className={'section__cards grid_inner-9'}>
				{children}
			</div>}
		/>
	);
}