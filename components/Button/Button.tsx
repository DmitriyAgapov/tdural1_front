
import Link from "next/link";
import React from "react";
interface Button {
	link?: string;
	container?:boolean;
	type: string;
	icon?: JSX.Element| string | undefined;
	action?: React.EventHandler<any> | any
	text?: string | React.ReactNode | JSX.Element;
}
const Button = (props: Button) => {
	const {action, link, type, text, icon, container} = props;

	if(props.container) return <div className={'button-wrapper flex @container'}>
		<Link href={link} className={`button ${type} ml-auto button-sm `} onClick={action}><span className={"hidden @[96px]:inline"} style={{fontSize: '1rem'}}>{text}</span><span className={"-m-2 inline @[72px]:hidden"}>{icon}</span></Link></div>
	if(props.action) return <a className={`button ${type} `} onClick={action}><>{text} {icon}</></a>
	return (
		<Link href={link} className={`button leading-none ${type}`}>
			<>{text} {icon}</>
		</Link>
	)
}
export default Button
