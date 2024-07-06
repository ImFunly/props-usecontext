import { useContext, createContext, useState } from "react";

const CalculatorContext = createContext();

const CalculatorProvider = ({children}) => {
    const [numList , setNumList] = useState([]);
    const [numSelect, setNumSelect] = useState(); 

    const addNumber = () =>{
        const numbers = [...numList];
        if(numSelect) setNumList([...numbers , numSelect]); 
    }

    const addSelected = (num) => setNumSelect(num); 

    const resetList = () => setNumList([]);

    const calculator = {addNumber,addSelected,resetList,numList};

    return (
        <CalculatorContext.Provider value={calculator}>
            {children}
        </CalculatorContext.Provider>
    );
}

const useCalculator = () => useContext(CalculatorContext);

export {CalculatorProvider, useCalculator};