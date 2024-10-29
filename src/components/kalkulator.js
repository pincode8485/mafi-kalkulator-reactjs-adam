import React, { useState } from 'react';
import './kalkulator.css';

const Kalkulator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (value) => {
    if (!operator) {
      setFirstNumber(firstNumber + value);
    } else {
      setSecondNumber(secondNumber + value);
    }
  };

  const handleOperatorClick = (value) => {
    if (!firstNumber) return;
    setOperator(value);
  };

  const handleSpecialOperation = (operation) => {
    let num = parseFloat(firstNumber || '0');
    switch (operation) {
      case '+/-':
        num = -num;
        setFirstNumber(num.toString());
        break;
      case '!':
        num = factorial(num);
        setFirstNumber(num.toString());
        break;
      case '^':
        setOperator('^');
        break;
      case '%':
        setOperator('%');
        break;
      default:
        break;
    }
  };

  const factorial = (num) => {
    if (num < 0) return 'Error';
    if (num === 0) return 1;
    return num * factorial(num - 1);
  };

  const clearInput = () => {
    setFirstNumber('');
    setOperator('');
    setSecondNumber('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      let expression;
      const firstNum = parseFloat(firstNumber);
      const secondNum = parseFloat(secondNumber);
  
      if (operator === '+') {
        expression = firstNum + secondNum;
      } else if (operator === '-') {
        expression = firstNum - secondNum;
      } else if (operator === '*') {
        expression = firstNum * secondNum;
      } else if (operator === '/') {
        expression = secondNum !== 0 ? firstNum / secondNum : 'Error';
      } else if (operator === '^') {
        expression = Math.pow(firstNum, secondNum);
      } else if (operator === '%') {
        expression = firstNum % secondNum;
      } else {
        expression = 'Error';
      }
  
      setResult(expression.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="kalkulator">
      <h1>MAFI KALKULATOR</h1>
      <div className="display-input">
        <div className="input">{firstNumber || ' '}</div>
        <div className="input">{operator || ' '}</div>
        <div className="input">{secondNumber || ' '}</div>
        <div className="input">=</div>
      </div>
      <div className="display-result">
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput} className="btn-clear">C</button>
        <button onClick={() => handleSpecialOperation('+/-')} className="btn-special">+/-</button>
        <button onClick={() => handleSpecialOperation('!')} className="btn-special2">!</button>
        <button onClick={() => handleSpecialOperation('^')} className="btn-special2">^</button>
        <button onClick={() => handleNumberClick('7')} className="btn-number">7</button>
        <button onClick={() => handleNumberClick('8')} className="btn-number">8</button>
        <button onClick={() => handleNumberClick('9')} className="btn-number">9</button>
        <button onClick={() => handleOperatorClick('%')} className="btn-operator">%</button>
        <button onClick={() => handleNumberClick('4')} className="btn-number">4</button>
        <button onClick={() => handleNumberClick('5')} className="btn-number">5</button>
        <button onClick={() => handleNumberClick('6')} className="btn-number">6</button>
        <button onClick={() => handleOperatorClick('/')} className="btn-operator">/</button>
        <button onClick={() => handleNumberClick('1')} className="btn-number">1</button>
        <button onClick={() => handleNumberClick('2')} className="btn-number">2</button>
        <button onClick={() => handleNumberClick('3')} className="btn-number">3</button>
        <button onClick={() => handleOperatorClick('*')} className="btn-operator">x</button>
        <button onClick={() => handleNumberClick('0')} className="btn-number">0</button>
        <button onClick={() => handleNumberClick('.')} className="btn-special">.</button>
        <button onClick={() => handleOperatorClick('-')} className="btn-operator">-</button>
        <button onClick={() => handleOperatorClick('+')} className="btn-operator">+</button>
        <button onClick={calculateResult} className="btn-equals">=</button>
      </div>
    </div>
  );
};

export default Kalkulator;
