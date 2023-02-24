import { useEffect, useState} from 'react';
import axios from 'axios';
import * as process from "process";

const useFetchData = (query, operationName, variables) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.post(process.env.NODE_API || 'http://localhost:1337/graphql',
                    {
                        "operationName": operationName,
                        "query": query,
                        "variables": variables
                });
                setData(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    return {
        data,
        loading,
    };
};

export default useFetchData;