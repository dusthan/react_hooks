const { useReducer, useEffect } = require("react");


function Counter(){
    //useReducer return a array
    const [state,dispatch] = useReducer(reducer,initialState)

    const {count,step} = state

    useEffect(()=>{
        console.log('effect with dispatch')
        const id = setInterval(()=>{
            dispatch({type: 'tick'})
        },1000)
        return ()=>{clearInterval(id)}
    },[dispatch])



    return (
        <>
        <p>{count}</p>
        <input value={step} onChange={(e) => {
            dispatch({type:'step',step: Number(e.target.value)})
        }}/>
        </>
    )

}



const initialState = {
    count: 0,
    step: 1
}


function reducer(state,action){
    const {count,step} = state
    if(action.type==='tick'){
        return {
            count: count+step,
            step
        }
    } else if(action.type==='step'){
        return {
            count,
            step: action.step
        }        
    } else {
        return new Error()
    }
}

export default Counter;