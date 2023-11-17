import {useState} from "react";
const order=[100,200,300]
function UseStateDemo(){
    // const total=order.reduce((total, number)=>(total+=number));
    const [counter,setCounter]=useState(1);
    const [infor,setInfor]=useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'ABC'
    });

    // const handleIncrease =()=>{
    //     setCounter(prev=>prev+1);
    //     setCounter(prev=>prev+1);
    //     setCounter(prev=>prev+1);
    // }
    const handleUpdate=()=>{
        setInfor({
            ...infor,
            bio: 'Tôi yêu màu hồng'
        })
    }
    return(
        <>
            <h1>{JSON.stringify(infor)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}
export default UseStateDemo;