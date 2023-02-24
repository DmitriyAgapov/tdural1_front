import React from "react";
import PanelSearchResultItems from "#/components/Panel/PanelSearchResultItems";
import SectionHeading from "./SectionHeading";
import Search from "#/components/Search";

interface SectionBaseProps {
    title?: string | React.ReactNode;
    heading?: string | React.ReactNode | undefined;
    headingCustom?: string | React.ReactNode | undefined;
    tabbar?: React.ReactNode;
    aside?: React.ReactNode;
    asideState?: boolean;
    content?: React.ReactNode;
    description?: React.ReactNode | string;
    breadcrumbs?: React.ReactNode | undefined | null;
    search?: React.ReactNode | undefined | null;
    asideType?: string;
    contentType?: string;
    contentTypeInner?: string;
    icon?: any;
    type?: string;
    currentPath?: {
        truckCategory: undefined | object,
        attributes: undefined | object
    };
    subtitle?: string;
    titleWithLink?: React.ReactNode | object | undefined | any;
}

//
// export function SectionHeading(props: any) {
//     if (props.container) return <div className={"border-b-2"}>
//         <div className="container max-w-screen-xl py-4 px-8 mx-auto xl:py-16 md:py-8">
//             <div className={'section__heading border-0'}><h1>{props.heading}</h1>
//             </div>
//             {props.breadcrumbs ?
//                 <BreadcrumbsCustom currentPath={props.currentPath} params={props.params} rootCat={"Техника"}
//                                    rootCatHref={'/trucks'}/> : null}
//         </div>
//     </div>
//     if (props.heading) return <div className={'section__heading'}><h1>{props.heading}</h1></div>
// }

export function SectionTabbar(props: any) {
    if (props.tabbar) return <div className={"section__tabber"}>{props.tabbar}</div>
}

const SectionContent = ({content, className = `section__content`}) => {

    if (content) return <div className={`${className}`}>

        {content}
    </div>
}

export function SectionDescription(props: any) {

    if (props.description) return <div className={'section__short_description pr-4'}>{props.description}</div>
    // <div className={'section__content'}>


}

function SectionSelect() {
    return null;
}

const SectionBase = (props: SectionBaseProps) => {
    const {
        title,
        titleWithLink = undefined,
        heading,
        headingCustom,
        description,
        search = null,
        breadcrumbs = null,
        tabbar,
        content,
        icon,
        type,
        subtitle,
        aside,
        asideState,
        asideType = 'col-1-3',
        contentType = 'col-4-12',
        contentTypeInner
    } = props;

    // @ts-ignore
    return (
        <section className={`section ${type}`}>
            <div className={`grid-col ${asideType}`}>

                {title || titleWithLink ? <header className={'section__header'}>
                    {icon ? <span className={'section__header-icon'}>{icon}</span> : null}
                    {typeof title === 'string' ? <h2 className={'section__title'}>{title}</h2> : title}
                    {typeof titleWithLink === 'object' ?
                        <h2 className={'section__title'}>{titleWithLink}</h2> : titleWithLink}
                    {typeof subtitle === 'string' ? <span className={'section__subtitle'}>{subtitle}</span> : null}
                </header> : null}
                {asideState ? <aside className={'aside-is-open'}> {aside}</aside> : <aside className={'aside-is-closed'}> {aside}</aside>}
            </div>
            <div className={`grid-col ${contentType}`}>
                {breadcrumbs}
                {(search) ? <div className={'section__search mb-16'}>
                    <Search />
                    <PanelSearchResultItems/>

                </div> : null}
                {heading ? <header className={'section-heading-only'}>
                    <SectionHeading heading={heading}/>
                </header> : null}
                {headingCustom ? <header className={'section-heading-only'}>
                    {headingCustom}
                </header> : null}

                {(description || tabbar) ? <div className={'section__description flex align-bottom'}>
                    <SectionDescription description={description}/>
                    <SectionSelect />
                    <SectionTabbar tabbar={tabbar}/>

                </div> : null}



                <SectionContent className={contentTypeInner}  content={content}/>

            </div>
        </section>
    )
}

export default SectionBase