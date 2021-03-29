import axios from "axios"
import { useEffect, useReducer, useState } from "react"


const FETCH_TYPE={
    INIT: 0,
    SUCCESS: 1,
    FAILURE: 2
}


const useDataApi = (initialUrl,initialData)=>{
    const [url,setUrl] = useState(initialUrl)
    const [state,dispatch] = useReducer(reducer,{
        isLoading: false,
        isError: false,
        data: initialData
    })
    useEffect(()=>{
        const fetchData = async ()=>{
            dispatch({type: FETCH_TYPE.INIT})
            try {
                const result = await axios(url)
                dispatch({
                    type: FETCH_TYPE.SUCCESS,
                    payload: result.data
                })
            } catch (error) {
                dispatch({
                    type: FETCH_TYPE.FAILURE
                })
            }
        }
        fetchData()
    },[url])
    return [state,setUrl]
}

function SearchReducer() {
    const [query, setQuery] = useState('redux');
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
      'https://hn.algolia.com/api/v1/search?query=redux',
      { hits: [] },
    );
   
    return (
      <>
        <form
          onSubmit={event => {
            doFetch(
              `https://hn.algolia.com/api/v1/search?query=${query}`,
            );
   
            event.preventDefault();
          }}
        >
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
   
        {isError && <div>Something went wrong ...</div>}
   
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }


function reducer(state, action){

    switch(action.type){
        case FETCH_TYPE.INIT:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case FETCH_TYPE.SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload
            }
        case FETCH_TYPE.FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            throw new Error()
    }
       
}

export default SearchReducer;