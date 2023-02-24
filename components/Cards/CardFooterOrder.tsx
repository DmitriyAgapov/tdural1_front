'use client'
import {AddToBasketSVG, MinusSVG, PlusSVG, RemoveToBasketSVG} from "#/components/Icons";
import Button from "#/components/Button/Button";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {get,has, observe} from "mobx";

function CardFooterOrder({item, price: any}) {
    const store = useStore(OrderStore);

    const [state, setState] = useState(() => store.partsInCart[item.id]?.state || false);
    const [amount, setAmount] = useState(() => store.partsInCart[item.id]?.amount || 1 );

    const incrementAmount = () => {
        setAmount(() => amount + 1);
        if(has(store.partsInCart, item.id)) {
            store.incrementAmount(item.id)
        }
    }
    const decrementAmount = () => {
        if (amount > 1) {
            setAmount(() => amount - 1);
            if(has(store.partsInCart, item.id)) {
                store.decrementAmount(item.id)
            }
        }
    }
    const onChange = event => {
        if (event.target.value >= 1) {
            setAmount(event.target.value);
            store.changeAmount(item.id, event.target.value)
        }
    };
    const addToCart = () => {
        store.setAddPart({...item, state: true, amount: amount});
        setState(true)
    }
    const removeFromCart = () => {
        store.setRemovePart(item.id);
        setAmount(1);
        setState(false);
    }
    // console.log(item.attributes.price)
    return <footer className={"card__footer"}>
        <div className={"card__price"}>
            <div className={`card__price-value ${!item.attributes.price ? 'disabled' : ''}`}>{item.attributes.price ? <>{item.attributes.price.toLocaleString()} <span>₽</span></> : 'По запросу'}</div>
        </div>
        {(item.attributes.price !== 0) ? <div className={"card__price-amount"}>
            <i className={"digit digit-plus opacity-0 group-hover:opacity-100"} onClick={incrementAmount}><PlusSVG/></i>
            <input  id="number" min="1" max="100"  value={amount} onChange={onChange} className={"card__price-input-field"}/>
            <i className={"digit digit-minus opacity-0 group-hover:opacity-100"} onClick={decrementAmount}><MinusSVG/></i>
        </div> : null}

        {state ? <Button icon={<RemoveToBasketSVG/>}
                action={removeFromCart}
                type={`button-outline card__link relative border-red-300 text-red-300   hover:bg-red-500  group-hover:border-red-500 hover:!text-white group-hover:text-red-300  group-hover:border-red-300`}
                />

            : <Button icon={<AddToBasketSVG/>}
                action={addToCart}
                type={`button-outline card__link relative  group-hover:bg-indigo-900 group-hover:fill-gray-50 hover:bg-white hover:shadow-2xl group-hover:text-white hover:fill-white group-hover:border-indigo-900`}
                />}
    </footer>;
}
export default observer(CardFooterOrder)