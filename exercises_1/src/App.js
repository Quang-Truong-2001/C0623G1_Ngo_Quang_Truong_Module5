import logo from './logo.svg';
import './App.css';
import React from "react";
import {Routes, Route} from "react-router-dom";
import {ProductList} from "./components/ProductList";
import {ProductCreate} from "./components/ProductCreate";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <Routes>
                <Route path="/productList" element={<ProductList/>}/>
                <Route path="/products/create" element={<ProductCreate/>}/>
            </Routes>
            <ToastContainer/>
        </>
    );
}

export default App;
