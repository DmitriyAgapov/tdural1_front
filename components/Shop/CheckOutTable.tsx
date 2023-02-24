"use client"
import TableRowItem from "./TableRowItem";
import {observer} from "mobx-react-lite";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";
import React, {Suspense, useCallback, useEffect, useRef, useState} from "react";
import {autorun, toJS} from "mobx";
import {Loader} from "#/components/Loader/Loader";
import Button from "#/components/Button/Button";


function CheckOutTbleInner({items}) {
            const tempData = toJS(items)
    // console.log(items)
        const Alli = items.forEach((item) => item.map((row, index) => {
          const tempData = toJS(row)
            return (<TableRowItem item={tempData}
                          attributes={tempData.attributes}
                          price={tempData.attributes?.price}
                          key={tempData.id} index={index}/>)
        }))

    if (items) return ;
}

function ButtonSlideForm(props: { action: () => void }) {
    return <div className={"flex justify-center my-4 lg:hidden bg-transparent"}>
        <Button type={"button-primary button-sm mx-auto"} text={"Продолжить оформление"} action={props.action}/>
    </div>;
}

const CheckOutTable = (props) => {

    const store = useStore(OrderStore);
    const sectionRef = useRef((typeof window !== 'undefined') ?  window.document.body.children[1].getElementsByClassName('section-with-sidebar') : null );
    const [items, setItems] = useState(null)
    const [sidebar, setSidebar] = useState(false)
    const [sum, setSum] = useState({
        sum: 0,
        count: 0
    });
    useEffect(() => {

            if(sidebar && sectionRef.current[0].className.indexOf('sidebar-is-open') == -1) {
                // console.log(" sidebar-is-open");
                sectionRef.current[0].classList.add('sidebar-is-open');
            } else {
                // console.log(sectionRef.current[0].className.indexOf('sidebar-is-open'))
                // console.log( sectionRef.current[0].classList)
                sectionRef.current[0].classList.remove('sidebar-is-open')
            }
    }, [sidebar])
    let handleAsideState = () => {
        setSidebar(prevState => !prevState);
    }
    useEffect(() => {
        const itemsInCart = store.getAllParts;
        let rows = itemsInCart.map(row => <TableRowItem item={row}
                                  attributes={row.attributes}
                                  price={row.attributes?.price}
                                  key={Number(row.id)} index={row.index}/>)


        setItems(rows)
        let data = {
            sum: store.totalSum,
            count: store.totalAmount
        }
        setSum(data);
    }, [store.totalAmount]);
    return (
        <>
            <div
                className="mx-auto mt-0 border-0 border-gray-200 p-0">
                <div className="flex flex-col overflow-x-hidden md:overflow-x-visible">
                    <div className="border-b-0 rounded-md  xl:drop-shadow-sm md:bg-gray-100 md:bg-gray-100 xl:shadow-md ">
                        <div className="inline-block min-w-full align-middle">
                            <div className="">
                                <table
                                    className="min-w-full md:divide-y md:divide-gray-200 table-fixed dark:divide-gray-700">
                                    <thead
                                        className="hidden  border-gray-200 md:table-header-group drop-shadow-sm md:bg-gray-50 shadow-md md:hover:shadow-md">
                                    <tr>
                                        {/*<th scope="col" className="p-5">*/}
                                        {/*    <div className="flex items-center">*/}
                                        {/*        <input id="checkbox-all" type="checkbox"*/}
                                        {/*               className="w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                                        {/*        <label form="checkbox-all" className="sr-only">checkbox</label>*/}
                                        {/*    </div>*/}
                                        {/*</th>*/}
                                        <th scope="col"
                                            className="py-3 px-6 text-sm uppercase font-semibold tracking-wider text-left text-slate-700">
                                            <div className={"text-xs text-slate-500 -mb-1"}>Арт./ №</div>
                                            Наименование

                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-sm uppercase font-semibold tracking-wider text-left text-slate-700">
                                            Цена
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-sm uppercase font-semibold tracking-wider text-left text-slate-700">
                                            Количество
                                        </th>
                                        <th scope="col"
                                            className="py-3 px-6 text-sm uppercase font-semibold tracking-wider text-right text-slate-700">
                                            Сумма
                                        </th>
                                        <th scope="col" className="p-4">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>

                                    <tbody className="divide-y-0 md:divide-gray-100 md:divide-y-2 divide-gray-100">

                                    <Suspense fallback={<Loader/>}>
                                        {items}
                                    </Suspense>

                                    </tbody>

                                </table>

                            </div>
                        </div>
                    </div>
                    <div className={'row grid md:inline-flex justify-center items-center md:divide-x divide-y-2 md:divide-y-0'}>
                        <div
                            className={"calcSum grid grid-cols-2 md:inline-flex justify-center pt-6 md:pt-0 gap-4 md:m-8 items-end"}>
                            <div
                                className={"calcSum__label text-xl font-normal text-right md:text-left leading-none"}>Количество:
                            </div>
                            <div className={"calcSum__value text-2xl font-bold  leading-none"}>
                                {sum.count.toLocaleString()}
                                <span className={"text-lg ml-1 font-normal text-slate-500  leading-none"}>шт.</span>
                            </div>

                        </div>
                        <div
                            className={"calcSum md:inline-flex grid grid-cols-2  justify-center p-3 md:pl-6 md:mr-12 gap-4 my-2 md:my-8 items-end "}>
                            <div
                                className={"calcSum__label text-xl font-normal text-right md:text-left  leading-none"}>Итого:
                            </div>
                            <div className={"calcSum__value text-2xl font-bold  leading-none"}>
                                {sum.sum.toLocaleString()}
                                <span className={"text-lg ml-1 font-normal text-slate-500  leading-none"}>₽</span></div>

                        </div>
                    </div>
                </div>


            </div>
            <ButtonSlideForm action={handleAsideState}/>
        </>
    )
}
export default observer(CheckOutTable);