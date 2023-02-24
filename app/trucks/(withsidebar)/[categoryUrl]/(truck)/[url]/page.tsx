import SectionTruck from "#/components/Sections/SectionTruck";
import SectionTrucksInfo from "#/components/Sections/SectionTrucksInfo";
import getData from "#/utils/getData";
import {Truck, TrucksCat} from "#/utils/gql/trucks";

//
// export async function generateStaticParams() {
//     const data = getData(TrucksCat);
//     const {data: {trucks} } = await data;
//
// 	return trucks.data.map((truck) => ({
//       url: truck.attributes.url,
// 	  categoryUrl: truck.attributes.category.data.attributes.url,
//     }));
//   }

export default async function Page({ params: {url} }) {

	const trucksData = getData(Truck, {url: url}, true);
	const {data: {truck}} = await trucksData;

	return(
		<>

			<SectionTruck {...truck.data} />
			{truck.data.attributes ? <SectionTrucksInfo
			attributes={truck.data.attributes}/> : null}
		</>
	);
}


export const dynamic = 'force-dynamic'