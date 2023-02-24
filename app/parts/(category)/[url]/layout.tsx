import React from "react";
import Aside from "#/components/Nav/Aside";
import getData from "#/utils/getData";
import {PartsAndCategories, PartsCategories} from "#/utils/gql/parts";
import Section from "#/components/Sections/Section";
import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";
import {createMarkup} from "#/utils/helpers";
import PaginationCustom from "#/components/PaginationCustom";
import PanelSearchResultItems from "#/components/Panel/PanelSearchResultItems";

type PageProps = {
	params?: any;
	children?: React.ReactNode;
};



export default async function PartsLayoutLayout({ children, params }: PageProps)  {

	const data = getData(PartsCategories, {url: params.url});
	const {data: {partsCategories, current}} = await data;
	const attributes = await current.data[0].attributes;
	// console.log(attributes)
	return (
		<Section
			title={'Запасные части'}
			type={'page page-parts section-with-sidebar sidebar-is-open'}
			asideType={'col-1-4'}
			search={true}
			heading={attributes.title}
			breadcrumbs={<BreadcrumbsCustom currentPath={{
				category: attributes
			}} type={'-mt-8 mb-6 -ml-6'} rootCat={"Запасные части"} rootCatHref={'/parts'}/>}
			contentType={'col-5-12'}
			// description={current.data.length === 1 ? <div className={'section__description'}>{current.data[0].attributes.content}</div> : null}
			aside={<Aside path={'/parts'}  menuItems={partsCategories.data}/>}
			content={children}
		/>

	);
}