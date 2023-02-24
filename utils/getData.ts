
async function getData(query: string, variables:{} = {}, cacheData:boolean = true) {
     // console.log(process.env.NODE_API)
     // console.log('vars', variables)
     // console.log('query', query)
    const res = await fetch("https://a.tdural1.ru/graphql", {
        cache: cacheData ? 'force-cache' : 'no-store',
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

    return await res.json();
}
export default getData;

export async function getDataNoCache(query: string, variables:{} = {}) {
    // console.log(process.env.NODE_API)
    // console.log('vars', variables)
    // console.log('query', query)
   const res = await fetch("https://a.tdural1.ru/graphql", {
       cache: 'no-store',
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

   return await res.json();
}