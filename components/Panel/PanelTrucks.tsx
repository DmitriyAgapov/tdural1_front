'use client'
import {Suspense} from "react";
import SliderSwiper from "#/components/Swiper/SliderSwiper";
import CardTruck from "#/components/Cards/CardTruck";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import { observer } from "mobx-react-lite";
import {Loader} from "#/components/Loader/Loader";

const PanelTrucks = ({trucks, view = false}) => {
    const {data} = trucks;
    const store = useStore(OrderStore)
    return (<Suspense fallback={<Loader />}>
            {trucks && trucks.length > 0 ?
                trucks.map((item, index) =>
                        <CardTruck
                            key={item.id}
                            attributes={item.attributes} view={view ? view : store.view}/>)
                : 'Пустая категория'}
        </Suspense>

    );
}
export default observer(PanelTrucks)