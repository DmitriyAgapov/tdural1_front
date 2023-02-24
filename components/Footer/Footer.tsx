import Logo from "../Logo";
import React from "react";
import NavHeader from "../Nav/NavHeader";
import SidebarFooter from "#/components/Sidebar/SidebarFooter";

const Footer = () => {
  return (
	  <footer className={'footer drop-shadow-2xl relative xgrid z-10 pt-4 pb-12'}>

		  <Logo style={'-mt-8'}/>
		  <NavHeader position={'footer'}/>
		  <SidebarFooter />
	  </footer>

  )
}
export default Footer