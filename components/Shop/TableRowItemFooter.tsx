"use client"
import {MinusSVG, PlusSVG, RemoveToBasketSVG} from "#/components/Icons";
import Button from "#/components/Button/Button";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import {useCallback, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";

export default function TableRowItemFooter(props: { onClick: () => void, value: number, onChange: (event) => void, onClick1: () => void, total: number, action: () => void }) {
    return <>
        <td className="p-6 text-md font-normal text-slate-900 whitespace-nowrap">
            <div className={"input-qty grid-cols-3"}
                 style={{display: "grid", gridTemplateColumns: "2rem 3rem 2rem"}}>
                <i className={"text-slate-700 fill-slate-700 digit digit-plus  group-hover:opacity-100"}
                   onClick={props.onClick}
                ><PlusSVG/></i>
                <input type={"number"} id="number" min="1" max="100" value={props.value} onChange={props.onChange}
                       className={"text-center px-2 round"}
                />
                <i className={"text-slate-500  fill-slate-500 digit digit-minus group-hover:opacity-100"}
                   onClick={props.onClick1}
                ><MinusSVG/></i>
            </div>

        </td>
        <td className="py-6 text-md min-w-[8rem] font-normal text-slate-900 whitespace-nowrap">
            <div className={`table__price-value`}>
                {props.total.toLocaleString()}
                <span>₽</span>
            </div>
        </td>
        <td className="p-6 text-md font-normal text-slate-900 whitespace-nowrap">
            <Button icon={<RemoveToBasketSVG/>}
                    action={props.action}
                    type={`button-outline card__link relative   hover:bg-red-500  group-hover:bg-indigo-900 group-hover:bg-transparent hover:text-red-500 group-hover:text-red-500 group-hover:border-red-500`}
            />
        </td>
    </>;
}
