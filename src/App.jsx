import './App.css';
import React from 'react';
import { CalculatorProvider } from './components/CalculatorProvider';
// import { Calculadora } from './pages/Calculadora';
// import { Resultado } from './pages/Resultado'
import CalculadoraRoutes from './routes/CalculadoraRoutes';

function App() {
  return (
    <CalculatorProvider>
      <CalculadoraRoutes />
    </CalculatorProvider>
  );
}

export default App;
