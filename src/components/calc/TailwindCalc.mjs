import React, {useState} from "react";

export default function TailwindCalc() {

    const [result, setResult] = useState('');

    function clickHandler(value) {
        setResult(result.concat(value));
    }

    function calculate() {
       setResult(eval(result).toString());
    }

    function backspace() {
       setResult(result.slice(0, result.length - 1));
    }

    function clear() {
        setResult('');
    }

    return(
        <>
            <h1>TailwindCalc</h1>
            <div className="max-w-md mx-auto bg-white rounded">
                <input type="text" value={result} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-24 rounded m-5"/>

                <div className="mx-3">
                    <button className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">&radic;</button>
                    <button className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">(</button>
                    <button className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">)</button>
                    <button className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">%</button>
                </div>

                <div className="mx-3">
                    <button onClick={() => clickHandler('7')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">7</button>
                    <button onClick={() => clickHandler('8')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">8</button>
                    <button onClick={() => clickHandler('9')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">9</button>
                    <button onClick={() => clickHandler('/')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">/</button>
                </div>

                <div className="mx-3">
                    <button onClick={() => clickHandler('4')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">4</button>
                    <button onClick={() => clickHandler('5')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">5</button>
                    <button onClick={() => clickHandler('6')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">6</button>
                    <button onClick={() => clickHandler('*')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">*</button>
                </div>

                <div className="mx-3">
                    <button onClick={() => clickHandler('1')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">1</button>
                    <button onClick={() => clickHandler('2')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">2</button>
                    <button onClick={() => clickHandler('3')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">3</button>
                    <button onClick={() => clickHandler('-')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">-</button>
                </div>

                <div className="mx-3">
                    <button onClick={() => clickHandler('0')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-24 rounded m-1">0</button>
                    <button onClick={() => clickHandler('.')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">.</button>
                    <button onClick={() => clickHandler('+')} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-11 rounded m-1">+</button>
                </div>

                <div className="mx-3">
                    <button onClick={backspace} className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-4 px-12 rounded m-1">Backspace</button>
                    <button onClick={clear} className="bg-red-100 hover:bg-red-300 text-black font-bold py-4 px-11 rounded m-1">Del</button>
                    <button onClick={calculate} className="bg-green-100 hover:bg-green-300 text-black font-bold py-4 px-12 rounded m-1">=</button>
                </div>
            </div>
        </>
    );
}

