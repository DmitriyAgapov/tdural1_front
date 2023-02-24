'use client'
import {createContext} from "react";
import OrderStore from "#/store/Orders";
import {useStore} from "#/store";

export const MobxContext = createContext(OrderStore);

export default function StoreWrapper({children}) {
    const store = useStore(OrderStore)
    return (
        <MobxContext.Provider value={store.initData}  >
            {children}
        </MobxContext.Provider>

    )
}