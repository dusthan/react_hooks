import { useEffect, useState } from "react"

function Counter(){
    const [count,setCount] = useState(0);
    const [step,setStep] = useState(1);

    useEffect(()=>{
        console.log('effect')
        let id = setInterval(()=>{
            setCount(count+step)
        },1000)
        console.log('timer id:'+id)
        return ()=>clearInterval(id)
    },[count,step])


    return (
        <>
            <p>count:{count}</p>
            <input value={step} onChange={e=>{setStep(Number(e.target.value))}}/>
        </>
    )
}

export default Counter;