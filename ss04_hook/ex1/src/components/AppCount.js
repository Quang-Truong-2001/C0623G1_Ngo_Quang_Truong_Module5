import {useState} from "react";

function AppCount(){
    const [countOne, setCountOne]=useState(0);
    const [countTwo,setCountTwo]=useState(0);
    const increaseOne = ()=> {
        setCountOne(countOne+1)
    }
    const increaseTwo=()=>{
        setCountTwo(countTwo+1);
    }
    return(
        <>
            <h1>{countOne}</h1>
            <button onClick={increaseOne}>ADD 1</button>
            <br/>
            <h1>{countTwo}</h1>
            <button onClick={increaseTwo}>ADD 2</button>
        </>
    )
}
export default AppCount;