import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCalculator } from '../components/CalculatorProvider';

export const Calculadora = () => {
    const { addNumber, addSelected ,numList } = useCalculator();

    const numeros = [0,1,2,3,4,5,6,7,8,9];
    
    const handleButtonClick = (e) => {
        addSelected(e.target.value)
        addNumber();
    }

    return (
        <>
        <h3>{numList.map((num) => (
            <span key={num + 'num'}>{num} + </span>
        ))}</h3>
        <div className='calculadora'>
            {numeros.map((numero)=> (
                <button
                    key={numero}
                    value={numero}
                    onClick={(e)=>handleButtonClick(e)}
                >{numero}</button>
            ))}
        </div>
        <Link to={'/resultado'}><button >RESULTADO</button></Link>
        </>
    );
};