import {
    action,
    computed,
    get,
    has,
    makeAutoObservable,
    observable,
    ObservableMap,
    configure,
    remove,
    set,
    autorun, values, toJS
} from "mobx";
import {autoSave} from "#/store/autosave";
import getData from "#/utils/getData";
import {Search} from "#/utils/gql/meta";


class OrderStore {
    drawer: boolean
    searchQuery: string | null
    searchResults: []
    view: boolean
    pageConfig: {
        pageSize: number
    }
    partsInCart: ObservableMap
    // @ts-ignore
    partsInCartObj: ObservableMap
    partsInCartCount: number
    sum: number
    totalCount: number = 0

    constructor() {
        // define and init observables
        this.partsInCart = observable.map();
        this.drawer = false;
        this.partsInCartObj = observable.map();
        this.sum = 0
        this.searchQuery = null
        this.view = false
        this.pageConfig = {
            pageSize: 25
        }

        this.totalCount = this.totalAmount
        this.partsInCartCount = 0
        makeAutoObservable(this);
        autoSave(this, 'OrderStore');
        configure({
            useProxies: "never"
        })
        autorun(() => {
            // console.log('autorun', values(this.partsInCart))
            // console.log(this.totalAmount);

            this.partsInCartCount = this.totalAmount;

        })
    }

    @computed get dataSearchResult() {

       if(has(this.searchResults, 'partsIn')) {
            let partsIn =  get(this.searchResults, 'partsIn');
           return toJS(partsIn)
       }
        return []
        //
        // if (has(this.searchResults, 'partsIn')) {
        //     console.log(has(this.searchResults, 'partsIn'))
        //     return get(this.searchResults, 'partsIn');
        // } else {
        //     this.setClearRes()
        //     return null
        // }

    }
    @action setClearCart = () => {
        console.log('clearmap');
        console.log(this.partsInCart)
        this.partsInCart = new ObservableMap<any, any>()
    }

    @action setClearRes() {
        this.searchQuery = " "
        this.searchResults = [];
    }

    @action setToggleDrawer() {
        this.drawer = !this.drawer
        // console.log('drawer', this.drawer)
    }

    @action setClosedDrawer() {
        this.drawer = false
        // console.log('drawer', this.drawer)
    }

    // @ts-ignore
    @computed get resultsData() {
        if (this.searchQuery && this.searchQuery.length < 2) this.setClearRes()
        setTimeout(() => {
            getData(Search, {
                "query": this.searchQuery
            }).then(value => {
                // console.log('check', value.data.search.parts.data.length > 0)
                if (value.data.search.parts.data.length >  1) {
                    this.setClearRes();
                    this.setResult(value.data.search.parts.data);
                    return value.data.search.parts.data
                }
            })
            return this.searchResults
        }, 1000)

    }

    @action setQuery = (query: string) => {
        this.searchQuery = query.toString();
    }

    @action setResult = (result) => {
        // console.log(result)
        this.searchResults = Object({partsIn: result});
        // set(this.searchResults, {partsIn: result})
    }
    @action get allResult ()  {
        // console.log(this.searchResults)
        return this.searchResults
        // set(this.searchResults, {partsIn: result})
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
    @action setAddPart = (item) => {
        set(this.partsInCart, item.id, item)
        return console.log(item)
    }
    @action setRemovePart = (id: number | string) => {
        remove(this.partsInCart, id)
    }
    @action incrementAmount = (id: number | string) => {
        if (has(this.partsInCart, id)) {
            const prevValue = get(this.partsInCart, id)
            set(this.partsInCart, id, {
                ...prevValue,
                amount: prevValue.amount += 1
            });
        }
    }

    @action decrementAmount = (id: number | string) => {
        if (has(this.partsInCart, id)) {
            const prevValue = get(this.partsInCart, id)
            if (prevValue.amount > 1) {
                set(this.partsInCart, id, {
                    ...prevValue,
                    amount: prevValue.amount -= 1
                });
            }
        }
    }
    @action changeAmount = (id: number | string, amount: number) => {
        if (has(this.partsInCart, id)) {
            const prevValue = get(this.partsInCart, id)
            if (prevValue.amount > 1) {
                set(this.partsInCart, id, {
                    ...prevValue,
                    amount: Number(amount)
                });
            }
        }
    }

    @computed getPart(id: string | number) {
        if (has(this.partsInCart, id)) {
            return get(this.partsInCart, id)
        }
    }

    get totalAmount() {
        let parts = values(this.partsInCart);
        // console.log(parts.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0))
        return parts.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
    }


    @computed get totalSum() {
        let parts = values(this.partsInCart);
        return parts.reduce((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.attributes?.price), 0)
    }


    @computed get getAllParts() {
        // console.log(values(this.partsInCart))
        return values(this.partsInCart)
    }

    // @computed CheckinCart = (id: number) => {
    //     let state = {
    //         state: false,
    //         index: -1
    //     };
    //     if (has(this.partsInCart, id)) {
    //
    //     }
    //     // this.partsInCart.forEach((item, index) => {
    //     //     // @ts-ignore
    //     //     if (item.id == id) {
    //     //         state = {
    //     //             state: true,
    //     //             index: index
    //     //         }
    //     //     }
    //     // });
    //     return state
    // }


    // if data is provided set this data to BooksStore
    hydrate = (data: any) => {
        if (!data) return;
        // this.setBooks(data.books);
    };

    // special method for demonstration

}

export default OrderStore