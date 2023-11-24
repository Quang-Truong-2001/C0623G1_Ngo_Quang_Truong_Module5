import {useEffect, useState} from "react";
import axios from "axios";

function page(){
    const [list, setList]=useState([]);
    const getAll=async ()=>{
        let res=await axios.get("http://localhost:8080/covids");
        setList(res.data);
    }
    useEffect(()=>{
        getAll();
    })
    return(
        <>
            <table border={1}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Reccovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index)=>(
                    <tr key={item.id}>
                        <td>{index}</td>
                        <td>{item.date}</td>
                        <td>{item.confirmed}</td>
                        <td>{item.active}</td>
                        <td>{item.reccovered}</td>
                        <td>{item.deaths}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}
export default page;