
import getData from "#/utils/getData";
import {Part} from "#/utils/gql/parts"
import React from "react";
import PanelItems from "#/components/Panel/PanelItems";
import {notFound} from "next/navigation";

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