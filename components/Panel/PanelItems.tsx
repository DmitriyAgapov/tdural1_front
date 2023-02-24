import CardParts from "#/components/Cards/CardParts";
import React, {Suspense} from "react";
import PaginationCustom from "#/components/PaginationCustom";
import SelectPageSize from "#/components/Switcher/SelectPageSize";
import {Loader} from "#/components/Loader/Loader";
interface PanelItemsProps { 
    items?: Promise<{data: {any}}> | any
    pagination?: boolean
    page: number
    total: number
    pageSize: number
    heading?: string | React.ReactNode
    panelProps?: any 
    
}
async function PanelItems({items, pagination, pageSize}:PanelItemsProps) {
    
    const {data: {parts}} = await items;
    const total = await parts.meta.pagination.total;
    
    return <div>
        <Suspense fallback={<Loader />}>
            <div className={'panel panel-with-pagination'}>

                    {parts.data.map((item: { attributes: any; price: any; }, index: React.Key) => <CardParts item={item} attributes={item.attributes} price={item.price}
                                                           key={index}/>)}


            </div>
            {pagination ? <div className={'panel__footer flex justify-between bg-white p-4 items-end'}>
                <PaginationCustom
             total={total}/>
                <SelectPageSize pageSize={pageSize}/>
            </div> : null}
        </Suspense>
        </div>
    
}
export default PanelItems