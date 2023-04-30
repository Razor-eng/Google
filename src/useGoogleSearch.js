import { useEffect, useState } from 'react'
import { API_KEY, CONTEXT_KEY } from './Keys'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`).then((response) => response.json()).then((result) => {
                setData(result);
                console.log(data)
            })
        }
        fetchData();
    }, [term])

    return data;
}

export default useGoogleSearch;




// https://www.googleapis.com/customsearch/v1?key=AIzaSyBCXUGObTfBReaRJQflSnJh3YHvvHClb4Q&cx=66484a3db55914a5e&q=discord