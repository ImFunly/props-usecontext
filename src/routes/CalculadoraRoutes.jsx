import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Resultado} from '../pages/Resultado';
import {Calculadora} from '../pages/Calculadora';


const CalculadoraRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Calculadora />} />
                <Route path='/resultado' element={<Resultado />} />
            </Routes>
        </Router>
    )
}

export default CalculadoraRoutes;