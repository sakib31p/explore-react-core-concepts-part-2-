import { useState } from "react"


export default function Team (){
    const [team, setTeam] = useState(11)

    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleRemove = () => {
        const newTeam = team - 1;
        setTeam(newTeam)
    }
    
    return(
        <div style={{border :'2px solid purple', padding: '10px', borderRadius :'15px'}}>
            <h2>Players :{team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}