import React, { useRef } from 'react'
import './ChangeColor.css'
const ChangeColor = () => {
    let inputField = useRef()
    let h1tag = useRef()
    let box= useRef()

    let ColorChange = () => {
        let colorValue=inputField.current.value
        // document.body.style.background= colorValue
        h1tag.current.style.color=colorValue
        box.current.style.cssText= `border:solid 10px ${colorValue};
                                           box-shadow: inset 0px 0px 15px ${colorValue};`
    } 
    

  return (
    <div className='changecolor'>
        <div className='p-header'>Change Color</div>
        <div className='container' ref={box}>
                <h1 id='tag' ref={h1tag}>Colors</h1>
                <input id='intput' ref={inputField} type='color' onChange={ColorChange}></input>
        </div>
    </div>
  )
}

export default ChangeColor