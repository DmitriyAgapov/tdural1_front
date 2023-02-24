import CardService from "#/components/Cards/CardService";
import {useState} from "react";

const ServicePanel = ({items, state, index}) => {
    // console.log('ites', items)
    // console.log('state', state)
  return (
      <div className={`section__cards   ${state === index ? 'active' : ''} `}>
          {items.map((item, index) => <CardService title={item.title} price={item.price}  index={index}  state={state} item={item} id={item.id} key={index}/>)}
      </div>
  )
}
export default ServicePanel