'use client'
import CardParts from "#/components/Cards/CardParts";
import React, {Suspense, useEffect, useState} from "react";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import {observer} from "mobx-react-lite";
import SectionHeading from "#/components/Sections/SectionHeading";
import {Loader} from "#/components/Loader/Loader";

const PanelSearchResultItems = () => {
    const store = useStore(OrderStore);
    const [results, setResults] = useState(() => store.setClearRes());

    useEffect( () => {

        const res = store.dataSearchResult;
        if(res.length > 0) setResults(res);


    }, [store.searchResults])

    if (results && results.length > 0) return (
            <div className={'panel panel-search-results'}>
                <SectionHeading heading={results ? 'Результаты поиска' : 'Ничего не найдено'} level={3}/>
                <Suspense fallback={<Loader />}>
                    {results.map((item, index) => <CardParts item={item} attributes={item.attributes}
                                                              price={item.price} key={index} />)}
                </Suspense>
            </div>
    )
    if (results && results.length === 0) return  <div className={'panel panel-search-results'}>
        <SectionHeading heading={'Ничего не найдено'} level={3}/>
    </div>
}
export default observer(PanelSearchResultItems)