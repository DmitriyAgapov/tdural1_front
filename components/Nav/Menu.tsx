'use client'
import Link from "next/link";
import React from "react";
import {CollapseSVG, ExpandSVG} from "#/components/Icons";
import {usePathname } from "next/navigation";

function MenuItem(props: { items?: string | any[]; path: any; attributes: {
        categoryId: string;
        children: [];
        url: any; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) {

    const [state, setState] = React.useState(false);
    const pathname = usePathname()

    return (
        <li>
            {/*<header>*/}
                {props.items && props.items.length > 0 ? <a className={'menu-icon-action'}  onClick={() => setState((prevState: boolean) => !prevState)}>{state ? <CollapseSVG /> : <ExpandSVG />} </a>: null}
                    <Link  href={`${props.path}/${props.attributes.url}`} className={`${pathname === `${props.path}/${props.attributes.url}` ? 'link-current-page' : ''}`}>{props.attributes.title}</Link>
            {/*</header>*/}
            {/*{(props.attributes?.children && props.attributes?.children.length > 0) ?*/}
            {/*    <SubMenu key={props.attributes.url} subpath={`${props.path}/${props.attributes.url}`} type={`submenu ${!state ? 'open' : 'hidden'}`} items={props.attributes?.children}/> : null}*/}
        </li>
    )
}
const SubMenu = (props) => {

    return (
        <ul className={`menu ${props.type}`}>
            {props.items.map((item) =>
                <MenuItem key={item.attributes.categoryId} path={props.subpath} {...item} items={props}/>
            )}
        </ul>
    )
}
const Menu = (props) =>
            <ul className={`menu ${props.type}`}>
                {props.items.map((item) => <MenuItem key={item.id} path={props.path} {...item}/>)}
            </ul>



export default Menu