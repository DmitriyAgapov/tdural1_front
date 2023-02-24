import getData from "#/utils/getData";
import {Part} from "#/utils/gql/parts";
import React, {Suspense} from "react";
import PanelItems from "#/components/Panel/PanelItems";
import {Loader} from "#/components/Loader/Loader";

export default async function Page(props) {
	const pageNumber = Number(props.searchParams.page);
	const pageSize = Number(props.searchParams.pageSize);
	const partsData = getData(Part, {url: props.params.url, page: pageNumber || undefined, pageSize: pageSize || 10, specOffer: true}, true);

	return (<>
			<Suspense fallback={<Loader />}>
				{/* @ts-expect-error Server Component */}
				<PanelItems  pagination={false} page={pageNumber} pageSize={pageSize} items={partsData}/>
			</Suspense>
		</>)
	
}


export const dynamic = 'force-dynamic'