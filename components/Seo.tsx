import React from "react"

const Seo = ({title = "", description = "", keywords = "" }) => {
    return (<React.Fragment>
        <title>Tdural1 - {title}</title>
        <meta name="description" content={description ? description : ""} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
        </React.Fragment>
    )
}
export default Seo