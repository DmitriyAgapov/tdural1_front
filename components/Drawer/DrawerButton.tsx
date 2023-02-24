'use client'
import {Menu} from '@mui/icons-material'
import React, {useState} from "react";
import {observer} from "mobx-react-lite";
import Drawer from "./Drawer";
import {useStore} from "#/store";
import OrderStore from "#/store/OrderStore";

function DrawerButton() {
	const store = useStore(OrderStore)
	const handleDrawer = () => {
		store.setToggleDrawer();
	}
	return (
		<a onClick={handleDrawer} className={'cursor-pointer drawer-button justify-self-center scale-x-75  text-primary flex-grow-0 flex-shrink-0 block lg:hidden'}>
			<Menu sx={{fontSize: '40px'}} key={"menuicon"} className={"hover::rotate-180"}/>
		</a>

	);
}

export default observer(DrawerButton)