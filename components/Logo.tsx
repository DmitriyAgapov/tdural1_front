'use client';
import Link from "next/link";

function Logo({style = ''}) {
	return (
		<div className={`logo bg-blue-700 px-4 py-3 flex ${style}`}>
			<Link href={'/'} className={'logo_text text-sm lg:text-base text-white m-auto no-underline'}>
				Грузовой
				<span className={'block font-black text-md  lg:text-3xl'}>URAL</span>
			</Link>
		</div>
	)
}

export default Logo