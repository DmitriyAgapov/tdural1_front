'use client'
import OrderForm from "../Form/OrderForm"
import Button from "#/components/Button/Button";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {log} from "util";

const CheckOutPanel = () => {

    return (
        <div className="min-h-screen flex justify-center h-full">
            <div className="w-full h-full">
                <div className="bg-white mx-auto px-4 sm:px-8 md:px-8 lg:px-6 xl:px-12 2xl:px-16 py-8 rounded-lg shadow-2xl  sticky top-[5vh]">
                    <h2 className="text-2xl font-bold tracking-wide text-gray-800">Оформление заказа</h2>
                    <OrderForm/>

                </div>
            </div>
        </div>
    )
}

export default CheckOutPanel