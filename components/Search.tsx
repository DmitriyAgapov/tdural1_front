'use client'
import React, {useEffect, useRef, useState} from "react";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import {observer} from "mobx-react-lite";
import {SearchSVG} from "#/components/Icons";

const Search = () => {
    const [query, setQuery] = useState("");
    const store = useStore(OrderStore);
    const ref = useRef();
    const clear = (e) => store.setClearRes()
    const handleValue = (e) => {
        e.preventDefault();
        if(ref.current !== undefined) { // @ts-ignore
            setQuery(() => ref.current.value);
        }
    }
    // useEffect(() => {
    //
    // }, [query])
    const timoutSearch = (e) => {
        e.preventDefault();
        if(query && query.length < 2) {
            store.setClearRes()
        }
        store.setQuery(query);
        store.resultsData
    }
    return (
        <div className={'search p-6 bg-white mb-4 rounded-md flex items-end'}>
            <label className="block flex-1">
                <span className="text-slate-500 text-md">Поиск</span>
                <div className={'relative flex overflow-hidden'}>
                    <input type="search" value={query} onChange={handleValue} ref={ref}
                       className="block w-full bg-gray-100 border-slate-300 border-2 p-3.5 rounded-r-none"
                       placeholder="Введите название или номер детали"/>
                    <a className={`button-primary bottom-1 pl-4 pr-4  rounded-md hover:static hover:outline-0 hover:outline-offset-0 hover:ring-0 rounded-l-none`} onClick={timoutSearch}>
                        <SearchSVG/></a>
                </div>
            </label>

        </div>
    )
}
export default observer(Search)