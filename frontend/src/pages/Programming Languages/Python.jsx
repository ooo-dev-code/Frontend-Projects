import React from 'react'
import "./index.css"
import { useState } from 'react'

function Python() {

  const btn1 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/Python/Github-Bot';
    return null;
  }
  const btn2 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/Python/Windows-APP';
    return null;
  }
  const btn3 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/Python/TinyTask';
    return null;
  }

  return (
    <div className='bg_project'>
      <div className='container'
        style={{fontSize: "4rem", textAlign: "center"}}>
        <button onClick={btn1} className="button-83" style={{paddingLeft: "50px"}}>
          <u>Github Bots</u>
          <div className="img_git"></div>
        </button>
        <button onClick={btn2} className="button-83" style={{paddingLeft: "100px"}}>
          <u>Paint GUI</u>
          <div className="img_git"></div>

        </button>
        <button onClick={btn3} className="button-83" style={{paddingLeft: "100px"}}>
          <u>TinyTask</u>
          <div className="img_git"></div>

        </button>
      </div>
    </div>
  )
}

export default Python
