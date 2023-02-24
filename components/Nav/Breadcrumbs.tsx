'use client'
import Link from 'next/link';
import React, {useCallback, useEffect, useState} from 'react';
import getData from "#/utils/getData";
import {Titles} from "#/utils/gql/meta";
import {Truck, Trucks} from "#/utils/gql/trucks";

function BreadcrumbsCustomSeparator() {
    return <span className="mx-1 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"/>
                </svg>
            </span>;
}

function BreadcrumbsCustom({currentPath: {category, item = null}, rootCatHref, rootCat, params = null, type = null}) {

    return (<div className={`flex breadcrumbs container max-w-screen-xl -mx-8 px-8 w-full mx-auto items-center px-6 overflow-auto whitespace-nowrap ${type}`}>
        <Link href={"/"}
           className="border-current text-slate-500 no-underline border-b-2 border-transparent hover:border-b-2 hover:text-primary hover:border-current">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
        </Link>

        <BreadcrumbsCustomSeparator/>

        <Link href={rootCatHref}
           className={`border-current text-slate-500 no-underline border-b-2 ${category ? 'border-transparent' : 'border-current'} hover:border-b-2 hover:text-primary hover:border-current`}>
            {rootCat}
        </Link>
        {category ? <>
        <BreadcrumbsCustomSeparator/>
        <Link href={`${rootCatHref}/${category.url}`}
           className={`border-current text-slate-500 no-underline border-b-2 ${item ? 'border-transparent' : 'border-current'} hover:border-b-2 hover:text-primary hover:border-current`}>
            {category.title}
        </Link></> : null}
        {item ? <>
        <BreadcrumbsCustomSeparator/>

        <Link href={`${rootCatHref}/${category.url}/${item.url}`}
           className="border-current text-primary no-underline border-b-2 border-current hover:border-b-2 hover:text-primary hover:border-current">
            {item.title}
        </Link>
        </> : null}
    </div>)
}
export default BreadcrumbsCustom