
import getData, { getDataNoCache } from "#/utils/getData";
import {Part, PartsCategories} from "#/utils/gql/parts"
import React, {Suspense} from "react";
import PanelItems from "#/components/Panel/PanelItems";
import {Loader} from "#/components/Loader/Loader";
import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";
import SectionHeading from "#/components/Sections/SectionHeading";
import Search from "#/components/Search";
import {notFound} from "next/navigation";
//
// export async function generateStaticParams() {
//     const data = getData(Part);
//     const {data: {partsCategories}} = await data;
//     return partsCategories.data.map((category) => ({
//         url: category.attributes.url,
//     }));
// }

export default async function PartsCategoryPage(props: { searchParams: { page: any; pageSize: any; }; params: { url: any; }; }) {
    const pageNumber = Number(props.searchParams.page) || undefined;
    const pageSize = Number(props.searchParams.pageSize) || undefined;
    const partsData =  await getData(Part, {url: props.params.url,
         page: pageNumber || undefined, pageSize: pageSize || 25
        }, true);
    // const {data: {parts, current}} = await partsData;
    // const attributes = await current?.data[0]?.attributes;
    // const {total} = await parts?.meta.pagination;
    if (!partsData) {
        notFound();
    }

    return 	(<>


        {/* <Suspense fallback={<Loader />}> */}
        {/* @ts-expect-error Server Component */}
            <PanelItems pagination={true} page={pageNumber} pageSize={pageSize} items={partsData} />
        {/* </Suspense> */}
    </>)


}
export const dynamic = 'force-dynamic'