import React from 'react';
import BreadcrumbsCustom from "#/components/Nav/Breadcrumbs";

export function ExampleClientComponent(props) {
    // console.log('123',props)
    // if(!loading) return (<Loader />)

    return (
        <>
            {/*<Suspense fallback={'loadss......'}>*/}

                <BreadcrumbsCustom currentPath={props.data} type={'pt-8 -mb-8'} params={props.params} rootCat={"Техника"} rootCatHref={'/trucks'} />

            {/*</Suspense>*/}

        </>

    )

}