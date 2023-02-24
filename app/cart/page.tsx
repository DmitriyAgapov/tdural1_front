import Section from '#/components/Sections/Section';
import SectionHeading from '#/components/Sections/SectionHeading';
import CheckOutPanel from "#/components/Shop/CheckOutPanel";
import CheckOutTable from "#/components/Shop/CheckOutTable";

export default function Home() {

	return (
		<>
			<SectionHeading container heading={"Корзина"} />
			<Section
				headingCustom={<SectionHeading headingTagClass={'p-0 mb-0 text-2xl font-bold tracking-wide text-gray-800 pl-4'} level={2} heading={"Товары"} className={'pt-0 pb-2 border-0 text-2xl font-bold tracking-wide text-gray-800 pl-4'}/>}

				description={'Внимание! При заказе на сумму менее 1000 р. менеджер компании оставляет за собой право сделать транспортную надбавку в размере 300 р.'}
				asideType={"col-span-4 order-2 lg:-mt-32"} contentType={"col-span-8 order-1"} type={"page-cart  bg-gray-100 section-with-sidebar"}
					 aside={<CheckOutPanel />}
				content={<CheckOutTable />}
			/>
		</>
	)
}
