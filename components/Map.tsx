
'use client'
import React, { useState } from "react";
import { YMaps, Map, Clusterer, Placemark } from "@pbe/react-yandex-maps";

const mapState = { center: [55.121621, 60.145682], zoom: 18, controls: [] };

const cities = [
    {
        id: 1,
        data: { content: "Saint-Petersburg" },
        options: { selectOnClick: false },
        coords: [59.93863, 30.31413]
    },
    {
        id: 2,
        data: { content: "Dzerzhinsky" },
        options: { selectOnClick: false },
        coords: [55.630527, 37.849046]
    },
    {
        id: 3,
        data: { content: "Moscow" },
        options: { selectOnClick: false },
        coords: [55.753559, 37.609218]
    }
];

const getPointData = (index) => {
    return {
        balloonContentBody: "placemark <strong>balloon " + index + "</strong>",
        clusterCaption: "placemark <strong>" + index + "</strong>"
    };
};

const getPointOptions = () => {
    return {
        preset: "islands#violetIcon"
    };
};

const YaMap = () => {
    const [state, setState] = useState();
    //
    // const onItemClick = (coords) => {
    //     setState({ center: coords });
    // };
    return (
      <YMaps>
                <Map className={'map'} width={'100%'} height={'48rem'} state={state} defaultState={mapState}>

                </Map>
            </YMaps>
    );
};

export default YaMap;

// https://wpcraft.top/yandeks-karty-perehod-k-metke-po-kliku-na-tekst/
