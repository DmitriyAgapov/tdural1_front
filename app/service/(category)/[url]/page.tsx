import getData from "#/utils/getData";
import {Service} from "#/utils/gql/service"
import CardService from "#/components/Cards/CardService";
import React, { Suspense } from "react";
import { Loader } from "#/components/Loader/Loader";
import SectionHeading from "#/components/Sections/SectionHeading";
import Search from "#/components/Search";
import PanelItems from "#/components/Panel/PanelItems";
import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";
import {notFound} from "next/navigation";
//
// export async function generateStaticParams() {
//     const data = getData(Service);
//     const {data: {serviceCategories} } = await data;
//
//     return serviceCategories.data.map((service) => ({
//       url: service.attributes.url,
//     }));
//   }

export default async function ServiceCategoryPage({ params }) {
    // console.log('data', params);
    const data = getData(Service, {url: params.url}, true);
    const {data: {services, serviceCategories} } = await data;

    // console.log('data', services.data.length > 0);
    if (services.data.length === 0) {
        notFound();
    }
    const {service_category: {data: {attributes}}} = await services.data[0].attributes;
    return 	(<>
        <BreadcrumbsCustom currentPath={{
            category:  attributes
        }} type={'-mt-8 mb-6 -ml-6'} rootCat={"Сервис"} rootCatHref={'/service'}/>
        <SectionHeading heading={attributes.title} />
        <Suspense fallback={<Loader />}>
            {services.data.map((item, index) => <CardService title={item.attributes.title} price={item.attributes.price} item={item} id={item.id} key={index}/>)}
        </Suspense>
    </>)
}


export const dynamic = 'force-dynamic'