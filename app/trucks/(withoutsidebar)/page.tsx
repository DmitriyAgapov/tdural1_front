import Section from "#/components/Sections/Section";
import getData from "#/utils/getData";
import {CategoriesWithTrucksWithAmount, Trucks, TrucksCat, TrucksCategories} from "#/utils/gql/trucks";
import {Suspense,} from "react";
import PanelTrucks from "#/components/Panel/PanelTrucks";
import Link from "next/link";
import {Loader} from "#/components/Loader/Loader";
import SectionHeading from "#/components/Sections/SectionHeading";
import {Metadata} from "next";

export const metadata:Metadata = {
	title: "Каталог автомобилей Урал",
}

export default async function Page() {
	const trucksPage = getData(CategoriesWithTrucksWithAmount,{}, true);
	const {data: {truckCategories}} = await trucksPage;

	return (<>
		<SectionHeading container  heading={"Техника"} />
		{
			truckCategories.data.map(category => {
					const {attributes: {trucks}} = category;
					if (trucks.data.length > 0) return (<Section key={category.id} type={'section-truck'}
						titleWithLink={<Link href={`/trucks/${category.attributes.url}`}
											 className={"font-bold no-underline border-current border-b-4 hover:border-b-4 text-slate-600 hover:text-primary"}>{category.attributes.title}</Link>}
						content={<div className={'section__cards grid_inner'}>
							<Suspense fallback={<Loader />}>
								<PanelTrucks view={false} trucks={trucks.data}/>
							</Suspense>

						</div>}
						// categories={truckCategories.data}
					/>)
				}
			)
		}
	</>)


}


export const dynamic = 'force-dynamic'