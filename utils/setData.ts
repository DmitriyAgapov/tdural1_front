import * as process from "process";

async function setData(query: string, variables:{} = {}) {
     // console.log(process.env.NODE_API)
    const res = await fetch(process.env.NODE_API || "http://localhost:1337/graphql", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        }),
    })
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

     return res.json();

}
export default setData;