import Section from '#/components/Sections/Section';
import SectionSpareParts from "#/components/Sections/SectionSpareParts";
import SectionService from "#/components/Sections/SectionService";
import SectionScreen from "#/components/Sections/SectionScreen";
import YaMap from '#/components/Map'
import SectionInstock from '#/components/Sections/SectionInstock';
import getData from "#/utils/getData";
import {Truck, Trucks} from "#/utils/gql/trucks";
import {PartsCategories} from "#/utils/gql/parts";
import {ServiceAndCategories} from "#/utils/gql/service";
import {Metadata} from "next";
import ZaprosTruckForm from "#/components/Form/ZaprosTruckForm";

export const metadata: Metadata = {
    title: "Грузовые автомобили Урал, запасные части и сервис",
}

export default async function Home() {
    // const trucks =  await getData(Trucks, {limit: 10});
    // const services =  await getData(Service);
    // const partsCategories = await getData(PartsCategories);

    const partsCat = getData(PartsCategories, {}, true);
    const dataService = getData(ServiceAndCategories, {}, true);
    const dataTrucks = getData(Trucks, {limit: 10}, true);
    const {data: {partsCategories}} = await partsCat;
    const {data: {serviceCategories, services}} = await dataService;
    const {data: {trucks}} = await dataTrucks;

    return (<>
            <SectionScreen/>
            <SectionInstock items={trucks}/>
            <Section title={'Вы не нашли интересующую Вас технику?'} type={'section-heading-only'}
                     content={<ZaprosTruckForm/>}/>
            <SectionSpareParts categories={partsCategories.data}/>
            <SectionService services={services}/>
            <YaMap/>
        </>)

}


export const dynamic = 'force-dynamic'