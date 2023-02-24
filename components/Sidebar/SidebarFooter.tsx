import {PlaceSvgMd, MailMd} from "#/components/Icons";
import Button from "#/components/Button/Button";
import Link from "next/link";
import React from "react";

function SidebarFooter() {
	// @ts-ignore
	return <div className={'sidebar sidebar-footer'}>
		<div className={"sidebar__address"}>
			<Link className={`leading-none  text- block border-0 lg:text-xl font-bold border-b-0`} href={'tel:73517777865'}>(351) 777-78-65</Link>
			<Link className={`mt-1 leading-none  block underline decoration-dashed underline-offset-4 text-xl border-0 border-b-0`} href={'tel:73517777865'}>Миасс, ул. Октября 21</Link>
		</div>


		<div className={'sidebar__links mt-4'}>	<a href={'mailto:info@uraltemp.ru'}>info@uraltemp.ru</a></div>
		{/*<div className={'sidebar__links flex flex-col gap-1 items-stretch max-w-[18rem]'}>*/}



		{/*	/!*<Button link={'#'} text={'НАПИСАТЬ НАМ'} type={'button-outline button-sm'} icon={<MailMd />}/>*!/*/}
		{/*	/!*<Button link={'#'} text={'Отправить заявку'} type={'button-outline button-sm'} icon={<MailMd />}/>*!/*/}
		{/*</div>*/}

	</div> ;
}

export default SidebarFooter