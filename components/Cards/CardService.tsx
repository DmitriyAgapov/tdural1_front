'use client'
import Image from 'next/legacy/image';
import Link from "next/link";
import Button from "#/components/Button/Button";
import {useState} from "react";

interface CardServiceProps {
	item: {
		title?: string
		id: string
		price: number
		attributes: {}
	};
	id?: string;
	state?: any;
	index?: any;
	price?: number;
	title?: string;

}
const CardService = ({item, id, state, title,price, index}:CardServiceProps) => {

  return (
	  <div className={`card card-service group hover:shadow-neu hover:relative hover:z-20`}>
		  {/* <header className={'card-service__header'}><h3>{category}</h3></header> */}
		  <header className={'card__header'}>
			  <span className={'card__title'}>{title}</span>
		  </header>
		  <footer className={"card__footer"}>
			  <div className={"card__price"}>
				  <div className={"card__price-value"}>{price !== null ? <>{price}<span>₽</span></> : "По запросу"}</div>
			  </div>
		  </footer>
		  {/*<div className={'card__content'}>*/}
			{/*  <ul className={'card-service_items'}>*/}
			{/*	  {items.map((item, index) =>  <li key={index} className={'card-service_item justify-self-center  group'}>*/}
			{/*		  <div className={'card-service_item_title mr-auto pr-6'}>{item.title || item.attributes.title}</div>*/}
			{/*		  <span className={'card-service_price font-bold'}>{item.price || item.attributes.price} ₽</span>*/}
			{/*		  /!*<Button text={'Подробнее'} type={'button-outline card__link  group-hover:bg-indigo-900 group-hover:text-white  hidden group-hover:border-indigo-900 group-hover:inline-flex'} link={'#'}/>*!/*/}
			{/*	  </li>)}*/}
			{/*  </ul>*/}
		  {/*</div>*/}
		  {/*<footer className={'card__footer'}>*/}
			{/*  <Button text={'Подробнее'} type={'button-outline card__link  group-hover:bg-indigo-900 group-hover:text-white group-hover:border-indigo-900'} link={'#'}/>*/}
		  {/*</footer>*/}
	  </div>
  )
}

export default CardService