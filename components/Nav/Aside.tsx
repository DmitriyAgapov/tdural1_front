
import React from "react";
import Menu from "#/components/Nav/Menu";

interface AsideProps {
	title?: string | React.ReactNode;
	icon?: any;
	subtitle?: string;
	menuItems?: [];
}

const Aside =  (props) => {


	return (

		<aside className={'section__aside'}>
			<Menu type={'menu-aside'} path={props.path} items={props.menuItems} />
		</aside>

	)
}
export default Aside