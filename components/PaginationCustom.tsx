'use client'
import {Pagination, PaginationItem} from "@mui/material";
import React from "react";
import {usePathname, useSearchParams} from 'next/navigation';
import Link from "next/link";
export default function PaginationCustom({total}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const pageSize = searchParams.get("pageSize")
    const page = searchParams.get("page")
  

    // console.log('searchParams',searchParams.get("pageSize"))
    // console.log('searchParamscount',(Number(total) / Number(pageSize)))
    return (<>
        <Pagination count={Math.ceil(Number(total) / Number(pageSize)) as number} page={Number(page)} size="large" renderItem={(item) => (
        <PaginationItem
            component={Link}
            passHref
            href={`${pathname}${item.page === 1 ? '' : `?page=${item.page}&pageSize=${pageSize || 25}`}`}
            {...item}
        />
    )}/>

    </>);
}
