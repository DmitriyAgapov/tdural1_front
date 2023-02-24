import React from "react";
import getData from "#/utils/getData";
import {CurrentTrucksCategory, Truck, Trucks, TrucksCategories} from "#/utils/gql/trucks";
import SectionTrucks from "#/components/Sections/SectionTrucks";
import SectionHeading from "#/components/Sections/SectionHeading";
import {SeoTruckCat, Titles} from "#/utils/gql/meta";

// export async function generateMetadata({params}) {
//     const seoData = getData(SeoTruckCat, {url: params.categoryUrl});
//     const {data: {truckCategory}} = await seoData;
//     const {attributes: {seo}} =  truckCategory.data; 
//     // console.log(attributes);
    
//     if(seo)
//     // attributes !== null && attributes?.seo !== undefined)
//     {
//         return {
//             title: seo?.metaTitle || 'no title',
//             description: seo?.metaDescription || 'no title',
//             keywords: seo?.keywords || 'no title',
//         }
//   }
// }

export default async function TrucksLayout({
                                               children,
                                               params
                                           }: { children: React.ReactNode, params: { categoryUrl: string, url: string } }) {
    let data = {
        category: {}, item: {}
    }
    try {
        if (params.url !== undefined && params.categoryUrl !== undefined) {
            const category = getData(Titles, {url: params.categoryUrl});

            const trucksData = getData(Truck, {url: params.url});
            const {data: {truck}} = await trucksData;

            const newDataCat = await category;
            const newDataItem = await truck;
            data = {
                category: newDataCat.data, item: newDataItem.data
            }
            // console.log(data)
        }
    } catch (e) {
        console.log(e)
    }
    const truckData = getData(Trucks, {url: params.categoryUrl});
    const categoriesData = getData(TrucksCategories);
    const currentCategoryData = getData(CurrentTrucksCategory, {url: params.categoryUrl});
    const {data: {trucks}} = await truckData;
    const {data: {truckCategories}} = await categoriesData;
    const {data: {currentCategory}} = await currentCategoryData;
    const title = await currentCategory?.data[0]?.attributes?.title;
    const attributes = await currentCategory?.data[0]?.attributes;
    // console.log(trucks)
    // const select = Array.from([trucks?.data?.attributes?.shortSpecs, trucks?.data?.attributes?.baseSpecs])
    return (<SectionTrucks
            currentPath={{
                category: attributes
            }}
            description={<><p>Поставим новыеa самосвалы УРАЛ из наличия и под заказ.</p><p>Предлагаем технику на шасси
                УРАЛ в готовых вариантах комплектации, а также выполним комплектацию по желанию заказчика. </p></>}
            headingCustom={<SectionHeading className={''} heading={title} level={1}/>}
            trucks={<div className={'section__cards grid_inner-9'}>{children}</div>}
            categories={truckCategories.data}/>

    )
}


export const dynamic = 'force-dynamic'