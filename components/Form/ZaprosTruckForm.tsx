'use client'

import React, {useEffect, useState} from "react";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import getData from "#/utils/getData";
import {CreateOrder} from "#/utils/gql/mutations";
import {ZakazSVG} from "../Icons";

const ZaprosTruckForm = () => {
    const store = useStore(OrderStore);
    const itemsInCart = store.getAllParts;
    const [formData, setFormData] = useState({
        "user_name": "", "user_email": "", "user_phone": "", "dop_info": "", "OrderParts": []
    })
    const handleForm = (e) => {
        e.preventDefault();
        setFormData({
            "user_name": e.target[0].value,
            "user_email": e.target[1].value,
            "user_phone": e.target[2].value,
            "dop_info": e.target[3].value,
            "OrderParts": [...itemsInCart.map(item => ({
                "zapchasti": item.id, "Quanity": item.amount
            }))]
        })
        setTimeout(() => {
            getData(CreateOrder, {
                data: formData
            }).then(() => {
                console.log('success')
            })
        }, 1000)
    }

    useEffect(() => {
        console.log('form', formData);
    }, [formData])

    return (<div className={'form-zapros'}>
        <header className={'form__header'}>
            <span className={'form__header-icon'}><ZakazSVG/></span>
            <h2 className={'form__title'}>Техника под заказ</h2>

            <span className={'form__subtitle'}>по вашим требованиям</span>
            <div className={'form_desc text-sm'}><p>У нас есть все разрешения и документы для переоборудования автомобилей</p>
               </div>
        </header>
        <form className="form lg:grid grid-cols-3 gap-6" onSubmit={handleForm}>
            <div className="flex flex-col grid-cols-1 gap-6 col-span-2">
                <div className={"lg:flex gap-6"}>
                <label className="block flex-1">
                    <span className="text-gray-700">Тип кузова</span>
                    <input type="text" className="mt-1 block w-full"
                           placeholder="АТЗ, Шасси, Автокран..."/>
                </label>
                <label className="block flex-1">
                    <span className="text-gray-700">Год выпуска</span>
                    <input type="text" className="mt-1 block w-full" placeholder=""/>
                </label>
                </div>
                <label className="block">
                    <span className="text-gray-700">Ваши требования</span>
                    <textarea className="mt-1 block w-full" rows={3}/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Телефон для связи с Вами</span>
                    <input type="tel" className="mt-1 block w-full" placeholder="+7 912 123 44 55"/>
                </label>



            </div>
            <div className={'block'}>
                <button type={"submit"} className={"button-form mt-6 w-full button-secondary"}>Отправить заказ</button>
                <div className={'form_text'}>
                    <p className="text-sm leading-snug text-gray-600 mt-4">После
                        оформления заказа с вами свяжется менеджер компании.</p>
                    <p className="text-sm leading-snug text-gray-600 mt-4">Отправляя данный заказ, я соглашаюсь с <a
                        href="#" className="text-blue-600 hover:text-blue-700 hover:underline">правилами </a> и <a
                        href="#" className="text-blue-600 hover:text-blue-700 hover:underline">политикой
                        конфеденциальности
                    </a></p>
                </div>
            </div>
        </form>

    </div>)
}

export default ZaprosTruckForm