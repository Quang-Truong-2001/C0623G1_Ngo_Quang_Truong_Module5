import {useState} from "react";

// const gifts=[
//     'CPU i9',
//     'RAM',
//     'KEYBOARD'
// ]
function TwoWayBinding(){
    // const [gift, setGift]=useState()
    //
    // const randomGift=()=>{
    //     const index=Math.floor(Math.random()*gifts.length);
    //     console.log(index)
    //     setGift(gifts[index])
    //
    // }
    const [infor, setInfor]=useState('')
    console.log(infor)
    const change=(event)=>{
        setInfor(event)
    }

    return(
        <>
            {/*<h1>{gift||'Chưa có phần thưởng'}</h1>*/}
            {/*<button onClick={randomGift}>lấy thưởng</button>*/}
            <h1>{infor}</h1>
            <input onChange={event=>setInfor(event.target.value)}/>
            <button >Update</button>
        </>
    )

}
export default TwoWayBinding;