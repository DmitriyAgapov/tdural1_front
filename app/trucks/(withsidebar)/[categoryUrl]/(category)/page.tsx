import getData from "#/utils/getData";
import {Trucks, TrucksCategories} from "#/utils/gql/trucks";
import PanelTrucks from "#/components/Panel/PanelTrucks";
import {notFound} from "next/navigation";
//
//
// export async function generateStaticParams() {
//     const data = getData(TrucksCategories);
//     const {data: {truckCategories} } = await data;
// 	console.log(truckCategories);
//
//     return truckCategories.data.map((category) => {
// 		console.log(category.attributes);
// 		return ({
// 		categoryUrl: category.attributes.url,
//     })});
//   }

export default async function PageCategoryTrucks({params: {categoryUrl}}) {
	// console.log(categoryUrl)
	const truckData = getData(Trucks, {url: categoryUrl}, true);
	const {data: {trucks}} = await truckData;
	// console.log('page', trucks.data)
	if (!trucks) {
		notFound();
	}
	return (
		<><PanelTrucks trucks={trucks.data} view={false}/>

		</>

			// <SectionTrucks
			// 	description={<><p>Поставим aновые самосвалы УРАЛ из наличия и под заказ.</p><p>Предлагаем технику на шасси УРАЛ в готовых вариантах комплектации, а также выполним комплектацию по желанию заказчика. </p></>}
			//     heading={<SectionHeading heading={title}
			// 							 container={true}/>}
			// 	trucks={trucks.data}
			// 	categories={truckCategories.data}/>

		)

}
export const dynamic = 'force-dynamic'