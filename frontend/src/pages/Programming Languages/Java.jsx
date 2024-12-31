import React from 'react'

function Java() {
  const btn1 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/Java/Bank';
    return null;
  }
  const btn2 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/Java/Dice_Surprise_Game';
    return null;
  }
  const btn3 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Mini-Projects-With-Java-Python-JS-C--GO/tree/main/Java/Calculator';
    return null;
  }

  return (
    <div className='bg_project'>
      <div className='container'
        style={{fontSize: "4rem", textAlign: "center"}}>
        <button onClick={btn1} className="button-83" style={{paddingLeft: "50px"}}>
          <u>Bank</u>
          <div className="img_git"></div>
        </button>
        <button onClick={btn2} className="button-83" style={{paddingLeft: "100px"}}>
          <u>Dice</u>
          <div className="img_git"></div>

        </button>
        <button onClick={btn3} className="button-83" style={{paddingLeft: "100px"}}>
          <u>Calculator</u>
          <div className="img_git"></div>

        </button>
      </div>
    </div>
  )
}

export default Java
