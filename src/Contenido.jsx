import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Acordion from "./Acordion";
import Card from "./Cardss";
function Contenido(props){
    return(
        <div className="p-4">
            <Routes>
                <Route path="/" element={<Acordion></Acordion>}></Route>
                <Route path="/pag2" element={<Card></Card>}></Route>
            </Routes>
        </div>
    );
}
export default Contenido;