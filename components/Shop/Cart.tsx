'use client'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import React, {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import Link from "next/link";

const Cart = () => {
    const store = useStore(OrderStore);
    const [sum, setSum] = useState({
        sum: 0,
        count: 0
    });
    useEffect(() => {
        let data = {
            sum: store.totalSum,
            count: store.totalAmount
        }
        setSum(data);
    }, [store.totalAmount]);

    return (
        <div className={'cart items-center flex gap-4 order-3 mr-4'}>
            <Link className={`cart_icon button ${sum.count !== 0 ? 'button-primary' : 'button-disabled'}  cart_icon button-sm  px-3 lg:p-3 rounded-md leading-none`} href={'/cart'}>
                <ShoppingCartIcon className={''}/>
                <span className={"cart_count"}>{sum.count}</span>
            </Link>
            <div className={"flex justify-items-center flex-col hidden md:flex lg:hidden xl:flex"}>
                <div className={`cart_sum ${sum.sum > 0 ? '' : 'cart_sum-empty my-auto'} `}>

                        {sum.sum > 0 ? <>
                            {sum.sum.toLocaleString()}
                            <span>₽</span></> : 'Корзина пуста'}

                </div>
                <Link href={'/cart'}>В корзину</Link>
            </div>
        </div>
    )
}
export default observer(Cart)