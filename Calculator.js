import './App.css';
import React from 'react';

function Calculator(){
    function calculate(){
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operator = document.getElementById('operator').value;
        let result =0;

        switch (operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case "/":
                result = num2 !==0 ? num1/num2 : 'cannot divide by zero';
                break;
            default:
                result = 'invalid operator';
        }
        document.getElementById('result').innerText = `Result: ${result}`;
    }
    return(
        <div style={{ padding:'20px', border:'80px solid #cc', width:'300px', background:'lightgreen'}} className='App'>
            <h2>Simple Calculator</h2>
            <input type="number" id="num1" placeholder="First Number" style={{
            width: '100%', marginBottom: '10px' }} />
            <select id="operator" style={{ width: '100%', marginBottom: '10px' }}>
                <option value="+">Add</option>
                <option value="-">Subtract</option>
                <option value="*">Multiply</option>
                <option value="/">Divide</option>
            </select>
            <input type="number" id="num2" placeholder="Second Number" style={{
            width: '100%', marginBottom: '10px' }} />
            <button onClick={calculate} style={{ width: '100%', padding: '10px',
            marginBottom: '10px' }}>
                calculate
            </button>
            <p id='result' style={{fontSize: '16px', fontweight: 'bold'}}>
                result:
            </p>
        </div>
    );
}
export default Calculator;
