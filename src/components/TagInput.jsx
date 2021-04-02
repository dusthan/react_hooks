import { useState } from "react"
import "./style.css"

const TagInput = ({tags})=>{
    const [tagData,setTagData]=useState(tags)
    const removeTagData= index =>{
        setTagData([...tagData.filter((_,idx)=>index!==idx)])
    }
    const addTagData = e =>{
        if(e.target.value !=='') {
            if(!tagData.includes(e.target.value)){
                setTagData([...tagData,e.target.value])
            }

            e.target.value=''
        }
    }

    return (
        <div className="tag-input">
            <ul className="tags">
                {tagData.map((tag,index)=>(
                    <li key={index} className="tag">
                        <span className="tag-title">{tag}</span>
                        <span className="tag-close-icon"
                        onClick={()=> removeTagData(index)}>X</span>
                    </li>
                ))

                }
            </ul>
            <input 
                type="text"
                onKeyUp={e=> (e.key==='Enter'?addTagData(e):null) }
                placeholder="Press enter to add a tag"
            />
        </div>
    )
}

export default TagInput;