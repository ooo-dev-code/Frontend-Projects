import React from 'react'

function JS() {
  const btn1 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/JS/Calculations/Calculato';
    return null;
  }
  const btn2 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/JS/Games/Rock-Paper-Scissors';
    return null;
  }
  const btn3 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/JS/Games';
    return null;
  }

  return (
    <div className='bg_project'>
      <div className='container'
        style={{fontSize: "4rem", textAlign: "center"}}>
        <button onClick={btn1} className="button-83" style={{paddingLeft: "50px"}}>
          <u>Calculator</u>
          <div className="img_git"></div>
        </button>
        <button onClick={btn2} className="button-83" style={{paddingLeft: "100px"}}>
          <u>Rock Paper Scissors</u>
          <div className="img_git"></div>

        </button>
        <button onClick={btn3} className="button-83" style={{paddingLeft: "100px"}}>
          <u>Arrow Game</u>
          <div className="img_git"></div>

        </button>
      </div>
    </div>
  )
}

export default JS
