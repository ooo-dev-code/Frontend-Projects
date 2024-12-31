import React from 'react'

function Django() {
  const btn1 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Backend-Projects/tree/e-commerce';
    return null;
  }
  const btn2 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Backend-Projects';
    return null;
  }

  return (
    <div className='bg_project'>
      <div className='container'
        style={{fontSize: "4rem", textAlign: "center"}}>
        <button onClick={btn2} className="button-83" style={{paddingLeft: "50px"}}>
          <u>School</u>
          <div className="img_git"></div>
        </button>
        <button onClick={btn1} className="button-83" style={{paddingLeft: "100px"}}>
          <u>E-commerce</u>
          <div className="img_git"></div>

        </button>
      </div>
    </div>
  )
}

export default Django
