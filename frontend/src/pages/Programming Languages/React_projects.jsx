import React from 'react'

function React_projects() {
  const btn1 = () => {
    window.location.href = 'https://github.com/ooo-dev-code/Frontend-Projects/tree/main/Portfolio';
    return null;
  }

  return (
    <div className='bg_project'>
      <div className='container'
        style={{fontSize: "4rem", textAlign: "center"}}>
        <button onClick={btn1} className="button-83" style={{paddingLeft: "50px"}}>
          <u>Portfolio</u>
          <div className="img_git"></div>
        </button>
      </div>
    </div>
  )
}

export default React_projects
