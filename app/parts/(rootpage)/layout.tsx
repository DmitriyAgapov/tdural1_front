import React from "react";
import Aside from "#/components/Nav/Aside";
import getData from "#/utils/getData";
import { PartsCategories} from "#/utils/gql/parts";
import Section from "#/components/Sections/Section";
import PanelSearchResultItems from "#/components/Panel/PanelSearchResultItems";
import Search from "#/components/Search";
import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";
type PageProps = {
	params?: any;
	children?: React.ReactNode;
};



export default async function PartsLayoutLayout({ children, params }: PageProps)  {
	console.log(params)
	const data = getData(PartsCategories, {url: params.url});
	const {data: {partsCategories, current}} = await data;
	const attributes = await current.data[0].attributes;
	// console.log('url', current)
	return (

		<Section
			title={'Запасные части'}
			type={'page page-parts section-with-sidebar sidebar-is-open'}
			asideType={'col-1-4'}
			heading={'Спецпредложение'}
			search={true}
			breadcrumbs={<BreadcrumbsCustom currentPath={{
				category: undefined
			}} type={'-mt-8 mb-6 -ml-6'} rootCat={"Запасные части"} rootCatHref={'/parts'}/>}
			contentType={'col-5-12'}
			description={current.data.length === 1 ? <div className={'section__description'}>{current.data[0].attributes.content}</div> : null}
			aside={<Aside path={'/parts'}  menuItems={partsCategories.data}/>}
			content={children}
		/>
	);
}