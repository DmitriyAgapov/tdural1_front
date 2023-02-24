import Section from "#/components/Sections/Section";
import Button from "#/components/Button/Button";
import SliderSwiperTruck from "#/components/Swiper/SliderSwiperTruck";
import Image from "next/legacy/image";

const SectionTruck = (props) => {
    const {id, attributes: {title,content, baseSpecs,image,url,instock,price       }   } = props;
    function createMarkup(code: any) {
        // console.log(code)
        return {__html: `${code}`};
    }

    console.log('price', price)
    return (
        <Section

            type={'page page-truck section-with-sidebar'}
            // tabbar={<SwitcherView action={handleAction} view={view}/>}
            asideType={'col-1-5'}
            contentType={'col-6-12 py-0 '}
            contentTypeInner={'card__image p-0 md:p-8 bg-white lg:rounded-md drop-shadow-2xl flex-1 flex'}
            aside={<div className={'card__content'}>
                <div className={"card-default pt-4 hover:shadow-none lg:flex-1 mb-1"}>
                    <div className={'truck-availible'}>{instock ? 'АВТО В НАЛИЧИИ' : 'АВТО ПОД ЗАКАЗ'}</div>
                    <h1 className={'truck-title'}>{title}</h1>

                    {baseSpecs.length > 0 ? <ul className={'card__specs'}>
                        {baseSpecs[0]?.year ? <li><span className={'card__specs-label'}>Год выпуска:</span> <span
                            className={'card__specs-value'}>{baseSpecs[0].year}</span></li> : null}
                        {baseSpecs[0]?.wheelType ?
                            <li><span className={'card__specs-label'}>Колесная формула: </span> <span
                                className={'card__specs-value'}>{baseSpecs[0].wheelType}</span></li> : null}
                        {baseSpecs[0]?.weightload ? <li><span className={'card__specs-label'}>Грузоподъемность: </span>
                            <span> className={'card__specs-value'}{baseSpecs[0].weightload}</span></li> : null}
                        {baseSpecs[0]?.engine ? <li><span className={'card__specs-label'}>Двигатель: </span> <span
                            className={'card__specs-value'}>{baseSpecs[0].engine}</span></li> : null}
                        {baseSpecs[0]?.power ?
                            <li><span className={'card__specs-label'}>Мощность двигателя: </span> <span
                                className={'card__specs-value'}>{baseSpecs[0].power}</span></li> : null}
                    </ul> : null}
                    {content ? <div className={'section__description'}
                                    dangerouslySetInnerHTML={createMarkup(content)}/> : null}
                </div>
                <div className={'order-bar card-default !shadow-none hover:!shadow-none hover:!drop-shadow-none'}>
                    <div className={`price ${!price ? 'disabled' : ''}`}>{price ? <>
                        <div className="card__price-label">Цена:</div>
                        {price.toLocaleString()} <span>₽</span></> : 'По запросу'}</div>

                    <Button text={'Оставить заявку'} type={'button button-secondary'} link={url}/>
                </div>

            </div>}
            content={image.data.length > 1 ?
                <SliderSwiperTruck slidesPerView={1}
                                   items={image.data}/> : <div className={"col-span-2 relative overflow-hidden min-h-[50vmin] flex-1"}>
                    {image.data.length > 0 ?
                        <Image layout="responsive" alt={title} src={`http://a.tdural1.ru${image.data[0].attributes.url}`} width={image.data[0].attributes.width} height={260}/>
                        : <Image layout="responsive" alt={title} src={`/noimage.png`} width={400} height={260}/> }
                    </div>
            }
        />
    )
}

export default SectionTruck