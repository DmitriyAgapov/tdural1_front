import Image from 'next/image';
import CardFooterOrder from "#/components/Cards/CardFooterOrder";
import {Badge} from "#/components/Badges";
import * as process from "process";

interface CardPartsProps {

	title: string;
	partnumber: string;
	img?: string;
	index?: number;
	link?: string;
	price?: number | string;

}

const CardParts = ({item,attributes, price}) => {

	return (
		<div className={'card card-parts group'}>
			{/*{index ? <div className={"card__number"}>{index}</div> : null}*/}
			<div className={'card__img'}>

				{(attributes.image && attributes.image?.data.length > 0) ?
					attributes.image?.data.map((item, index) => {

						return (<Image layout="responsive"
									   key={index}
									   alt={attributes.title}
									   src={`http://a.tdural1.ru${item.attributes.url}`} width={item.attributes.width}
									   height={item.attributes.height}/>
						)
					}) : <Image layout="responsive"
								alt={attributes.title}
								src={'/noimage.png'} width={42}
								height={42}/>}
			</div>
			<header className={'card__header'}>
				{attributes.Specpredlogenie ? <Badge className={'badge-discount'} text={'%'}/> : null}
				<div className={'card__partnumber'}>{attributes.partNumber}</div>
				<span className={'card__title'}>{attributes.title}</span>
			</header>
			<CardFooterOrder item={item} price={attributes.price} />
		</div>
	)
}

export default CardParts