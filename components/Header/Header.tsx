'use client'
import Logo from "../Logo";
import React, {useEffect, useRef} from "react";
import Sidebar from "../Sidebar/Sidebar";
import NavHeader from "../Nav/NavHeader";
import DrawerButton from '#/components/Drawer/DrawerButton'
import Cart from "#/components/Shop/Cart";
import {useStore} from "#/store";
import OrderStore from "#/store/OrderStore";
import Drawer from "#/components/Drawer/Drawer";
import {observer} from "mobx-react-lite";

const Header = () => {
	const store = useStore(OrderStore);
	const bodyRef = useRef((typeof window !== 'undefined') ?  window.document.body : null );
	useEffect(() => {
		if(store.drawer) {
			bodyRef.current.className = 'drawer-open'
		} else {
			bodyRef.current.className = 'drawer-closed';
		}
	}, [store.drawer])
  return (
	  <>
	  <header className={'header h-[4rem] lg:h-full'}>
		  <DrawerButton />
		  <Logo />
		  <NavHeader position={'header'} />

		  <Sidebar />
		  <Cart />
	  </header>
		  {
			  store.drawer && typeof window != 'undefined' ? (
				  <Drawer open={store.drawer} />
			  )
		  : null}

	  </>
  )
}
export default observer(Header)