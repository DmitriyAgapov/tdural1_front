import {
    action,
    computed,
    entries,
    get,
    has,
    makeAutoObservable,
    observable,
    ObservableMap,
    configure,
    remove,
    set,
    autorun
} from "mobx";
import {proxyToArray} from "#/utils/helpers";
import {autoSave} from "#/store/autosave";
import getData from "#/utils/getData";
import {Search} from "#/utils/gql/meta";


class OrderStore {
    searchQuery: string
    searchResults: []
    view: boolean
    pageConfig: {
        pageSize: number
    }
    partsInCart: Map<string|number, object>
    // @ts-ignore
    partsInCartObj:Map<string|number, object>
    partsInCartCount: number
    sum: number
    totalCount: number = 0

    constructor() {
        // define and init observables
        this.partsInCart = observable.map({})
        this.partsInCartObj = observable.map({})
        this.sum = 0
        this.searchQuery = ''
        this.view = false
        this.pageConfig = {
            pageSize: 10
        }
        this.totalCount = this.totalAmount
        this.partsInCartCount = this.partsInCart.size
        makeAutoObservable(this);
        autoSave(this, 'OrderStore');
        configure({
            useProxies: "never"
        })
        autorun(() => {
            if (this.searchQuery.length > 3) {
                console.log("Now I'm hungry!", this.searchQuery)
            } else {
                console.log("I'm not hungry!")
            }
        })
    }
    @action setAddPartObj = (item) => {
        set(this.partsInCartObj, item.id, item)
        // console.log(currentItem.state)
        // if (currentItem.state) {
        //     // console.log('in', currentItem.index)
        //     let index = currentItem.index
        //     // console.log(index)
        //     // console.log('in', this.partsInCart[index])
        //     // @ts-ignore
        //     this.partsInCart[index] = item;
        // } else {
        //
        //     // @ts-ignore
        //     this.partsInCart.push(item);
        // }
    }
    // @ts-ignore
    @computed get resultsData() {
        const dt = async function Dt(searchQuery) {
            const test = getData(Search, {
                query: searchQuery
            });
            return await test
        }
        console.log('sq', this.searchQuery)
        console.log('test', dt(this.searchQuery))
        console.log(this.searchQuery.length)
        if (this.searchQuery.length > 1) {
            console.log("query", this.searchQuery)
            return getData(Search, {
                query: this.searchQuery
            }, false).then(value => {
                this.setResult(value);
                console.log(value);
                return value
            });
        } else this.setResult([])
        return null
    }

    @action setQuery = (query) => {
        this.searchQuery = query
    }
    @action setResult = (result) => {
        this.searchResults = result
    }
    @action setView = (value: boolean) => {
        this.view = value
    }
    @action setPageSize = (value: number) => {
        this.pageConfig = {
            ...this.pageConfig,
            pageSize: value
        }
    }

    @computed get testT() {
        return console.log('testT', this.sum, this.partsInCart)
    }

    @action setRemovePart = (id: string) => {
        remove(this.partsInCart, id)
    }

    @computed get totalAmount() {
        let parts = entries(this.partsInCart);
        console.log(this.partsInCart)
        // @ts-ignore
        return parts.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    }

    // @ts-ignore
    @computed get totalSum() {

        // return this.partsInCart.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.attributes?.price), 0)
    }
    @computed getPart(id) {
        if(has(this.partsInCartObj, id)) {
           return get(this.partsInCartObj, id)
        }}
    @computed get getAllParts() {

           return entries(this.partsInCartObj)

    }
    @computed CheckinCart = (id: number) => {
        let state = {
            state: false,
            index: -1
        };
        this.partsInCart.forEach((item, index) => {
            // @ts-ignore
            if (item.id == id) {

                state = {
                    state: true,
                    // @ts-ignore
                    index: index
                }
            }
        });
        return state
    }

    @action setAddPart = (item) => {
        let currentItem = this.CheckinCart(item.id);
        // console.log(currentItem.state)
        if (currentItem.state) {
            // console.log('in', currentItem.index)
            let index = currentItem.index
            // console.log(index)
            // console.log('in', this.partsInCart[index])
            // @ts-ignore
            this.partsInCart[index] = item;
        } else {

            // @ts-ignore
            this.partsInCart.push(item);
        }
    }

    @computed get totalOrders() {
        return this.partsInCart
    }

    // if data is provided set this data to BooksStore
    hydrate = (data: any) => {
        if (!data) return;
        // this.setBooks(data.books);
    };

    // special method for demonstration

}

export default OrderStore