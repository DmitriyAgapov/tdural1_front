import {Call, CallOutlined} from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import React from "react";

function Sidebar() {
	return <div className={'sidebar sidebar-header ml-auto'}>

			<Link className={`cart_icon button-sm  px-3 lg:p-3 rounded-md leading-none inline-flex md:hidden  bg-blue-900  border-0`} href={'tel:73517777865'}>

				<Call className={'text-slate-50 m-auto'}/></Link>
		<div className={"sidebar__address"}>
		<Link className={`leading-none flex text-xs border-0 hidden md:block md:text-xl font-bold border-b-0`} href={'tel:73517777865'}>(351) 777-78-65</Link>
		<Link className={`mt-1 leading-none flex underline decoration-dashed underline-offset-4 text-xs border-0 hidden md:block md:text-sm border-b-0`} href={'tel:73517777865'}>Миасс, ул. Октября 21</Link>
		</div>

	</div> ;
}

export default Sidebar