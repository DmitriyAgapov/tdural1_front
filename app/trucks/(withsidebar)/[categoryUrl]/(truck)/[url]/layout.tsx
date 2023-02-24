import React from "react";
import {ExampleClientComponent} from "#/components/BreadCrumbs";
import getData from "#/utils/getData";
import {  Titles} from "#/utils/gql/meta";
import { Truck } from "#/utils/gql/trucks";

// export async function generateMetadata({params}) {
//     const seoData = getData(SeoTruck, {url: params.url});
//     const {data: {truck: {data: {attributes}}}} = await seoData;
//     // console.log(attributes)
//     if(attributes != null && attributes?.seo !== undefined) {
//         return {
//             title: attributes.seo?.metaTitle || 'no title',
//             description: attributes.seo?.metaDescription  ||'no desc',
//             keywords: attributes.seo?.keywords  ||'no keywords',
//         }
//     }
// }

export default async function TruckLayout({children, params}: {
    children: React.ReactNode,
    params: {
        categoryUrl: string
        url: string
    }
}) {

    let data = {
        truckCategory: undefined,
        attributes: undefined

    }
    try {
        if (params.url !== undefined && params.categoryUrl !== undefined) {
            const category = getData(Titles, {url: params.categoryUrl});
            const trucksData = getData(Truck, {url: params.url});
            const {data: {truck}} = await trucksData;

            const newDataCat = await category;
            const newDataItem = await truck;
            data = {
                ...newDataCat.data,
                ...newDataItem.data
            }
            // console.log(data)
        }
    } catch (e) {
        console.log(e)
    }
    const {data: {attributes}} = data.truckCategory;
    const {attributes: {title, url}} = data;

    return (
        <>
            <ExampleClientComponent data={{
                category: {
                    ...attributes
                }
                // , item: {
                //     title: title,
                //     url: url
                // }
            }}
                                    params={params}/>
            {children}
        </>
    );
}


export const dynamic = 'force-dynamic'