'use client'

import {useEffect, useState} from "react";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import getData from "#/utils/getData";
import {CreateOrder} from "#/utils/gql/mutations";

const OrderForm = () => {
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
                "zapchasti": item.id,
                "Quanity": item.amount
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

    return (<form className="form mt-8" onSubmit={handleForm}>
            <div className="flex flex-col grid-cols-1 gap-6">
                <label className="block">
                    <span className="text-gray-700">ФИО</span>
                    <input type="text" className="mt-1 block w-full"
                           placeholder="Иванов Иван Иванович"/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Емаил</span>
                    <input type="email" className="mt-1 block w-full" placeholder="john@example.com"/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Телефон</span>
                    <input type="tel" className="mt-1 block w-full" placeholder="john@example.com"/>
                </label>
                <label className="block">
                    <span className="text-gray-700">Дополнительная информация</span>
                    <textarea className="mt-1 block w-full" rows={3}/>
                </label>
                <div className={'form_text'}>
                    <p className="text-sm leading-snug text-gray-600 mt-4">Пожалуйста, заполните все поля. <br/>После
                        оформления заказа с вами свяжется менеджер компании.</p>
                    <p className="text-sm leading-snug text-gray-600 mt-4">Отправляя данный заказ, я соглашаюсь с <a
                        href="#" className="text-blue-600 hover:text-blue-700 hover:underline">правилами </a> и <a
                        href="#" className="text-blue-600 hover:text-blue-700 hover:underline">политикой
                        конфеденциальности
                    </a></p>
                </div>
                <button type={"submit"} className={"button-form mt-6 w-full button-primary"}>Отправить заказ</button>
                <a onClick={() => store.setClearCart()} className={"button button-form w-full button-outline"}>Очистить корзину</a>
            </div>
        </form>)
}

export default OrderForm