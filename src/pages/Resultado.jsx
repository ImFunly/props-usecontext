import { Link } from 'react-router-dom';
import { useCalculator } from "../components/CalculatorProvider";
import { useState } from 'react';

export const Resultado = () => {
    const {resetList,numList} = useCalculator();
    const [resultado, setResultado] = useState(() =>{
        let sumas=0;
        numList.forEach(element => {
            sumas += Number(element);
        });
        return sumas;
    });

    return (
        <div className='resultado'>
            <h1>RESULTADO</h1>
            <div>
            <p>Suma total: {resultado}</p>
            </div>
            <button onClick={()=>resetList()}>Restaurar calculos</button>
            <Link to="/"><p>Volver a calculadora</p></Link>
        </div>

    );
}