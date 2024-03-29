import { useCallback, useEffect, useState } from "react"

import axios from 'axios'

// function getFetchUrl(query){
//     return 'https://hn.algolia.com/api/v1/search?query='+query;
// }

function SeachResults(){
    const [data,setData] = useState({hits:[]})
    const [query,setQuery] = useState('react')

    const getFetchUrl = useCallback(()=>{
        return 'https://hn.algolia.com/api/v1/search?query='+query;
    },[query])

    useEffect(()=>{
        const url = getFetchUrl()
        async function fetchData(query){
            const result = await axios(url)
            setData(result.data)
        }
        fetchData()
    },[getFetchUrl])
    
    
    return (
        <>
            <input value={query} onChange={e=>{setQuery(e.target.value)}} />
            <ul>
                {
                    data.hits.map(item=>(
                        <li key={item.objectId}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))
                }
            </ul> 
        </>
    )
}

export default SeachResults;