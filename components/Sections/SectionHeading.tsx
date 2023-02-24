import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";
import React from "react";
interface SectionHeadingProps {
    container?: any
    breadcrumbs?: any
    heading?: string | React.ReactNode | undefined;
    level?: number
    className?: string
    headingTagClass?: string
}

const SectionHeading = ({container, heading, headingTagClass = '', breadcrumbs, level = 1, className = ''}: SectionHeadingProps) => {
    const InsertTag = (props: {level, className}) => {
        switch (level) {
            case 1:
                return <h1 className={props.className}>{heading}</h1>;

            case 2:
                return <h2 className={props.className}>{heading}</h2>;

            case 3:
                return <h3 className={props.className}>{heading}</h3>;
            default:
                return;
        }
    }
    if (container) return <div className={"border-b-2"}>
        <div className={`container max-w-screen-xl py-4 px-8 mx-auto xl:py-16 md:py-8 ${className}`}>
            <div className={'section__heading border-0'}>
            <InsertTag level={level} className={""}/>

            </div>
            {breadcrumbs ? <BreadcrumbsCustom currentPath={{
                category: undefined
            }} rootCatHref={undefined} rootCat={undefined}/> : null}
        </div>
    </div>
    if (heading) return <div className={`section__heading ${className}`}>
        <InsertTag className={headingTagClass} level={level}/></div>

}
export default SectionHeading