import Image from 'next/legacy/image';
import Link from "next/link";
import Button from "#/components/Button/Button";

interface CardTruckProps {

		title: string;
		img?: string | null;
		view: string;
		specs?: {
			year?: string | number;
			weightload?: string;
			engine?: string;
		}
		icon?: SVGElement;
		container?:boolean;
		link?: string;
		price?: number | string;

}
const CardTruck = ({view, container = false, icon = null,attributes: {title, category, image, baseSpecs, fullTextSpecs, instock,shortSpecs,content,  url, price}}) => {

  return (
	  <div className={`card card-truck view-${!view ? 'grid' : 'list'} group `}>
		  <div className={'card__img'}>
			  {image.data.length > 0 ?
				  <Image layout="responsive" alt={title} src={`https://a.tdural1.ru${image.data[0].attributes.url}`} width={image.data[0].attributes.width} height={260}/>
				  : <Image layout="responsive" alt={title} src={`/noimage.png`} width={400} height={260}/> }
		  </div>
		 <header className={'card__header'}>
			 <Link href={'#'} className={'card__title'}>{title}</Link>
		 </header>
		  {baseSpecs || shortSpecs ? <div className={'card__content'}>
			  <ul className={'card__specs'}>
				  {shortSpecs?.map((spec, index) => <li key={index}><span className={'card__specs-label'}>{spec.spec_title}: </span> <span  className={'card__specs-value'}>{spec.spec_value}</span></li>) }
				  {baseSpecs[0]?.year ? <li><span className={'card__specs-label'}>Год выпуска: </span><span  className={'card__specs-value'}>{baseSpecs[0].year}</span></li> : null}
				  {baseSpecs[0]?.weightload ? <li><span className={'card__specs-label'}>Грузоподъемность: </span><span  className={'card__specs-value'}>{baseSpecs[0].weightload}</span></li> : null}
				  {baseSpecs[0]?.engine ? <li><span className={'card__specs-label'}>Двигатель: </span><span  className={'card__specs-value'}>{baseSpecs[0].engine}</span></li> : null}
			  </ul>
		  </div> : null}
		  <footer className={'card__footer'} style={container ? {display: "grid", gridTemplateColumns: '1fr 1fr'}: {}}>
			  <div className={`card__price ${!price ? 'disabled' : ''}`}>

				  {price ? <> <div className="card__price-label">Цена:</div><div className="card__price-value">{price.toLocaleString()} <span>₽</span></div></> : 'По запросу'}</div>
			  <Button icon={icon} container={container} text={'Подробнее'} type={'button-outline card__link button-sm group-hover:bg-indigo-900 group-hover:text-white group-hover:border-indigo-900'} link={`/trucks${category.data !== null ? `/${category.data?.attributes.url}` : ''}/${url}`}/>
		  </footer>
	  </div>
  )
}

export default CardTruck