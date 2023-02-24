import SectionTruck from "#/components/Sections/SectionTruck";
import SectionTrucksInfo from "#/components/Sections/SectionTrucksInfo";
import getData from "#/utils/getData";
import {Trucks} from "#/utils/gql/trucks";
export default async function Page({ params }) {

	const {data} =  await getData(Trucks, {url: params.url});
	const [result] = await Promise.all([data]);
	const truck = result.trucks.data[0];
	// console.log(result)
	return(
		<>
			<SectionTruck {...truck} />
			<SectionTrucksInfo additional_content={truck.attributes.additional_content} additional_options={truck.attributes.additional_options} title={truck.attributes.title} fullTextSpecs={truck.attributes.fullTextSpecs}/>
		</>
	);
}