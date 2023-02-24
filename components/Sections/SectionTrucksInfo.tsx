'use client'
import Section from "#/components/Sections/Section";
import {useState} from "react";
import CardService from "#/components/Cards/CardService";
import {createMarkup} from "#/utils/helpers";
import {useSelectedLayoutSegment, useSelectedLayoutSegments} from "next/navigation";
interface AttributesProps {

    title: string
    fullTextSpecs:string
    additional_options: string
    additional_content: string

}
interface SectionTrucksInfoProps {
    attributes?: AttributesProps | undefined
    additional_content?: any | undefined
    title?: any | undefined
    fullTextSpecs?: any | undefined
    additional_options?: any | undefined
}
const SectionTrucksInfo = ({attributes: {title, fullTextSpecs, additional_options, additional_content}}: SectionTrucksInfoProps) => {
    const [state, setState] = useState(1)

    return (
        <Section

            type={'section-trucks-info section-bg-top'}
            content={<div className={'section__cards'}>

                <div className={`trucks-full-specs ${state === 1 ? 'active' : ''}`}>
                    <header>
                        <h3>Технические характеристики {title}</h3>
                    </header>
                    <div className={'trucks-full-specs__content'}
                         dangerouslySetInnerHTML={createMarkup(fullTextSpecs)}/>


                </div>
                <div className={`trucks-full-specs  ${state === 2 ? 'active' : ''}`}>
                    <header>
                        <h3>Перечень дополнительного оснащения</h3>

                    </header>
                    <div className={'trucks-full-specs__content'}
                         dangerouslySetInnerHTML={createMarkup(additional_options)}/>

                </div>
                <div className={`trucks-full-specs  ${state === 3 ? 'active' : ''}`}>
                    <header>
                        <h3>Дополнительные данные</h3>
                    </header>
                    <div className={'trucks-full-specs__content'}
                         dangerouslySetInnerHTML={createMarkup(additional_content)}/>
                </div>

                {/*{result.map((item, index) => <CardService active={state === index ? true : false} category={item.category} items={item.items} key={index}/>)}*/}
            </div>}
            tabbar={
                <ul className={'section__service-tabs'}>
                    <li><a className={`button button-link ${state === 1 ? 'active' : ''}`}
                           onClick={() => setState(1)}>Характеристики</a></li>
                    <li><a className={`button button-link ${state === 2 ? 'active' : ''}`} onClick={() => setState(2)}>Доработки
                        техники</a></li>
                    <li><a className={`button button-link ${state === 3 ? 'active' : ''}`} onClick={() => setState(3)}>Документы
                        и материалы</a></li>
                    {/*{result.map((item, index) => {*/}
                    {/*	return (<li key={index}><a className={`button button-link ${state === index ? 'active' : ''}`} onClick={() => setState(index)}>{item.category}</a> </li>)*/}
                    {/*})}*/}
                </ul>
            }
        />
    )
}
export default SectionTrucksInfo