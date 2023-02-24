"use client"
import {MinusSVG, PlusSVG, RemoveToBasketSVG} from "#/components/Icons";
import Button from "#/components/Button/Button";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import React, {useCallback, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import {has} from "mobx";

function TableRowItem ({item, attributes, price, index}) {
    // console.log(item)
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
    return (
        <tr className="hover:bg-gray-100 group card-parts-table grid grid-cols-[1fr,2fr] md:table-row bg-gray-100 overflow-hidden drop-shadow-2xl my-1 last-of-type:mb-8 -mx-2 rounded-md md:rounded-none md:m-0">
            <td scope="col"
                className="py-4 px-1 text-xs uppercase font-semibold tracking-wider text-right text-slate-700 md:hidden">
                <div className={"text-sm text-slate-500 mb-2"}>Арт./ №</div>
                Наименование

            </td>

            <td className="py-4 px-2 md:py-3 md:px-2 w-full md:pl-6 text-md font-medium leading-tight text-slate-900">
                <div className={"partNumber text-sm text-slate-500 mb-1"}>{item.attributes.partNumber}</div>
                {attributes.title}
            </td>
            <td scope="col"
                className="py-4 px-1  text-sm uppercase font-semibold tracking-wider text-right text-slate-700  md:hidden">
                Цена
            </td>

            <td className="py-4 px-2   text-md font-normal text-slate-900">
                <div className={`table__price-value text-left md:text-right`}>
                    {item.attributes.price.toLocaleString()}
                        <span>₽</span>
                </div>
            </td>
            <td scope="col"
                className="py-4 px-1   text-sm uppercase font-semibold tracking-wider text-right text-slate-700  md:hidden">
                Количество
            </td>


            <td className="py-4 px-2  md:py-3 md:px-2 text-md font-normal text-slate-900 whitespace-nowrap flex md:table-cell gap-4">
                <div className={"input-qty grid-cols-3"}
                     style={{display: "grid", gridTemplateColumns: "2rem 3rem 2rem"}}>
                    <i className={"text-slate-700 fill-slate-700 digit digit-plus  group-hover:opacity-100"}
                       onClick={incrementAmount}
                    ><PlusSVG/></i>
                    <input type={"number"} id="number" min="1" max="100" value={amount} onChange={onChange}
                           className={"text-center px-2 round"}
                    />
                    <i className={"text-slate-500  fill-slate-500 digit digit-minus group-hover:opacity-100"}
                       onClick={decrementAmount}
                    ><MinusSVG/></i>
                </div>
                <Button icon={<RemoveToBasketSVG/>}
                        action={removeFromCart}
                        type={`button-outline card__link relative md:hidden button-disabled  hover:bg-red-500  group-hover:bg-indigo-900 group-hover:bg-transparent hover:text-red-500 group-hover:text-red-500 group-hover:border-red-500`}
                />
            </td>
            <td scope="col"
                className="py-4 px-1   text-sm uppercase font-semibold tracking-wider text-right text-slate-700  md:hidden">
                Сумма
            </td>
            <td className="py-4 px-2 md:py-3 md:px-2 text-md min-w-[8rem] font-normal text-slate-900 whitespace-nowrap">
                <div className={`table__price-value text-left md:text-right`}>
                    {(amount * price).toLocaleString()}
                    <span>₽</span>
                </div></td>
            <td className="py-4 px-1 md:py-3 md:px-2 text-md font-normal text-slate-900 whitespace-nowrap hidden md:table-cell">
                <Button icon={<RemoveToBasketSVG/>}
                        action={removeFromCart}
                        type={`button-outline card__link relative   hover:bg-red-500  group-hover:bg-indigo-900 group-hover:bg-transparent hover:text-red-500 group-hover:text-red-500 group-hover:border-red-500`}
                />
            </td>
        </tr>);
}
export default observer(TableRowItem)