function getDataStatic(query: string, variables:{} = {}) {
    return fetch(process.env.NODE_API as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        }),
    })
}
export default getDataStatic;