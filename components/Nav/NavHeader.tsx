'use client';
import Link from "next/link";
import {usePathname, useSelectedLayoutSegment} from "next/navigation";
import {useStore} from "#/store";
import OrderStore from "#/store/OrderStore";

function NavHeader({position}) {
	const pathname = usePathname()
	const store = useStore(OrderStore);
	const segment = useSelectedLayoutSegment();
	const links = [{
		title: 'Техника',
		url: '/trucks',
	}, {
		title: 'Запасные части',
		url: '/parts',
	},{
		title: 'Сервис',
		url: '/service',
	},
		{
		title: 'Контакты',
		url: '/contacts',
	},
	// 	{
	// 	title: 'Корзина',
	// 	url: '/cart',
	// }

	];
	return (
		<nav className={`${position === 'footer'  ? 'footer__nav' : position === 'header' ? "header__nav" : "drawer_nav"}`}>
			<ul className={`menu menu-main pt-0`}>
				{links.map((link, index) => <li key={index} className={"my-0"}>
					<Link href={link?.url} title={link?.title} onClick={() =>  position === 'drawer' ? store.setClosedDrawer(): null} className={`button-link ${pathname.includes(link.url) ? 'active': ''}`}>{link.title}</Link> </li>)}

			</ul>
		</nav>
	);
}
export default NavHeader