'use client'
import {GridViewSVG, ListViewSVG} from "#/components/Icons";
import {observer} from "mobx-react-lite";
import {useStore} from "#/store";
import OrderStore from "#/store/Orders";

const SwitcherView = () => {
	const store = useStore(OrderStore)
	function setViewList() {
		// console.log(`switcher list`)
		store.setView(false)
		// props.action('list');
	}
	function setViewGrid() {
		// console.log(`switcher grid`)
		store.setView(true)
		// props.action('grid');
	}

	return (
		<div className={'switchers switcher-view border-l pl-4 hidden md:flex'}>
			<div className={`switcher ${!store.view ? '' : 'selected'}`} onClick={setViewGrid}>
				<ListViewSVG />
			</div>
			<div className={`switcher ${!store.view ? 'selected' : ''}` } onClick={setViewList}>
				<GridViewSVG />
			</div>

		</div>
	)

}
export default observer(SwitcherView)