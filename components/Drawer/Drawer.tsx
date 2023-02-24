import SidebarFooter from "#/components/Sidebar/SidebarFooter";
import NavHeader from "#/components/Nav/NavHeader";

function Drawer({open}) {

	return <div className={`drawer fixed flex flex-col z-[100] bg-gray-100 left-0  top-16  right-0 bottom-0 p-4 duration-300 ease-in-out ${!open ? '-translate-x-full' : ''}`}>
		<NavHeader position={'drawer'}/>
		<SidebarFooter/>
	</div> ;
}

export default Drawer