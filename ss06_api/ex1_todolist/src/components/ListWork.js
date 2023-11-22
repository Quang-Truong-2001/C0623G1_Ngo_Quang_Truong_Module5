import {useEffect, useState} from "react";
import * as listService from "../services/ListService"
import {Form, Field, Formik} from "formik";


function ListWork(){
    const [list, setList]=useState([])
    const initValue={
        name: ""
    }
    const getList=async ()=>{
        if(list){
            let data= await listService.getAll();
            setList(data);
        }
    }
    const addWork=async (value)=>{
        let isSuccess= await listService.addWork(value);
        if(isSuccess){
            getList();
        }
    }

    useEffect(()=>{
        getList();
    },[])

    if(!list){
        return null;
    }

    return(
        <>
            <h1>TodoList</h1>
            <Formik initialValues={initValue}
                onSubmit={(values)=>{
                    addWork(values);
                }}
            >
                <Form>
                    <Field type="text" id="name" name="name"/>
                    <button type="submit">Save</button>
                </Form>
            </Formik>

            <table>
                <thead>
                <tr>
                    <td>STT</td>
                    <td>Name</td>
                </tr>
                </thead>
                <tbody>
                {list.map((item, index)=>(
                    <tr key={item.id}>
                        <td>{index+1}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        </>
    )
}
export default ListWork;