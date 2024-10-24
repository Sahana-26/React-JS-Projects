import React, { useRef } from 'react'
import './Calculator.css'
const Calculator = () => {
    let inputField = useRef()
    let getValue = (e) =>{
        let val= e.target.innerText
        inputField.current.value+=val
    }

    let getResult = ()=>{
        let res= eval(inputField.current.value)
        inputField.current.value=res
    }

    let clear=()=>{
        inputField.current.value=''
    }
  return (
    <>
        <div className="calculator">
            <div className="p-header">CALCULATOR</div>
            <div className="container">
                {/* table>thead>(tr>th*3) */}
                {/* tbody>(tr>th*3)+(tr>th*4)*3+(tr>th*3) */}
                <table rules='all'>
                    <thead>
                        <tr>
                            <th colSpan={4}> <input ref={inputField}></input></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th onClick={clear} colSpan={2}>CE</th>
                            <th onClick={getValue}>/</th>
                            <th onClick={getValue}>*</th>
                        </tr>
                        <tr>
                            <th onClick={getValue}>7</th>
                            <th onClick={getValue}>8</th>
                            <th onClick={getValue}>9</th>
                            <th onClick={getValue}>-</th>
                        </tr>
                        <tr>
                            <th onClick={getValue}>4</th>
                            <th onClick={getValue}>5</th>
                            <th onClick={getValue}>6</th>
                            <th onClick={getValue}>+</th>
                        </tr>
                        <tr>
                            <th onClick={getValue}>1</th>
                            <th onClick={getValue}>2</th>
                            <th onClick={getValue}>3</th>
                            <th onClick={getResult} rowSpan={2}>=</th>
                        </tr>
                        <tr>
                            <th onClick={getValue}>.</th>
                            <th onClick={getValue}>0</th>
                            <th onClick={getValue}>%</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Calculator