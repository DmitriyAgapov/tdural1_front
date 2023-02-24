import SwitcherView from "#/components/Switcher/SwitcherView";
import Aside from "#/components/Nav/Aside";
import Section from "#/components/Sections/Section";
import React from "react";
import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";


const SectionTrucks = (props) => {
		return(
		<Section
			title={'Техника'}
			// icon={<TrucksMd />}
			headingCustom={props.headingCustom}
			asideType={'col-1-3'}
			contentType={'col-4-12'}
			breadcrumbs={<BreadcrumbsCustom currentPath={props.currentPath} type={'-mt-8 mb-6 -ml-6'} params={props.params} rootCat={"Техника"} rootCatHref={'/trucks'}/>}
			description={props.description}

			type={'page page-trucks section-with-sidebar'}
			tabbar={<SwitcherView />}
			aside={<Aside path={'/trucks'} menuItems={props.categories}/>}
			content={props.trucks}
		/>
	)
}

export default SectionTrucks