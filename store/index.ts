// we need to enable static rendering for prevent rerender on server side and leaking memory
import { enableStaticRendering } from "mobx-react-lite";
import OrderStore from './Orders';
import config from "mobx"
import {autorun, extendObservable, toJS} from "mobx"
// enable static rendering ONLY on server
// @ts-ignore
enableStaticRendering(typeof window === "undefined")

// init a client store that we will send to client (one store for client)
let clientStore: any

const initStore = (initData:any|undefined) => {
// check if we already declare store (client Store), otherwise create one
    const store = clientStore ?? new OrderStore();
// hydrate to store if receive initial data
    if (initData) store.hydrate(initData)

// Create a store on every server request
    if (typeof window === "undefined") return store
// Otherwise it's client, remember this store and return
    if (!clientStore) clientStore = store;
    return store
}

// Hoook for using store
export function useStore(initData: any) {
    return initStore(initData)
}