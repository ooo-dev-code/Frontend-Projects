import React, { useState } from 'react'
import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import './index.css'
import "./assets/aura.css"
import "./assets/bubbles.css"
import "./assets/line.css"

export default function Frontpage() {
  
  const navigate = useNavigate();

  const navi = async () => {

    document.documentElement.style.setProperty('--go', "300vh");
    document.documentElement.style.setProperty('--text_left', "300vh");
    document.documentElement.style.setProperty('--wave_left', "0%");
    await timeout(1100)

    navigate('/projects', { replace: true })

  }


  const navihome = () => {navigate('', { replace: true })}
  const naviabout = () => {navigate('/about', { replace: true })}
  const navicontact = () => {navigate('/contact', { replace: true })}

  const [light, setLight] = useState(false)
  const light_dark = () => {
    if (!light) {
      document.documentElement.style.setProperty('--bg', "aliceblue");
      document.documentElement.style.setProperty('--color', "black");
      document.documentElement.style.setProperty('--bg_light', "black");
      document.documentElement.style.setProperty('--bg_after_light', "white");
      document.documentElement.style.setProperty('--left', "1%");
      setLight(true)
    }
    if (light) {
      document.documentElement.style.setProperty('--bg', "black");
      document.documentElement.style.setProperty('--color', "white");
      document.documentElement.style.setProperty('--bg_light', "white");
      document.documentElement.style.setProperty('--bg_after_light', "black");
      document.documentElement.style.setProperty('--left', "88%");
      setLight(false)
    }
  }

  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  return (
    <>
    <Front className='front'>
    
      
        <NavBar className="navBar" style={{zIndex: 1000000000}}>
          <div onClick={light_dark} className='lightDark'></div>
          <span class="loader"></span>
          <ul>
            <li className="btn_list" onClick={navihome}>Home</li>
            <li className="btn_list" onClick={naviabout}>About</li>
            <li className="btn_list" onClick={navicontact}>Contact</li>
          </ul>
        </NavBar>
        <section class="sticky">
          <div class="bubbles">
              <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            
          </div>
        </section>
        <Profile className='profile'>
          <div className="box" style={{zIndex: -10000}}>
            <div className="circle" />
            <div className="circle1" />
            <div className="circle2" />
            <div className="circle3" />
            <div className="circle4" />
          </div>
        </Profile>
        <TextBlock className='textblock'>
          <h1>Mohamed Kaouachi</h1>
          <p>
            <h3>Hi! I am a begginner developper in <i style={{textShadow: "0px 0px 3px yellow", fontSize: "1.5rem"}}>  Python  </i>  ,  <i style={{textShadow: "0px 0px 3px yellow", fontSize: "1.5rem"}}>  Machine Learning  </i> and <i style={{textShadow: "0px 0px 3px yellow", fontSize: "1.5rem"}}>Deep Learning</i> programs. 
          I also do some <i style={{textShadow: "0px 0px 10px green", fontSize: "1.5rem"}}>Frontend</i> and <i style={{textShadow: "0px 0px 10px green", fontSize: "1.5rem"}}>Backend</i> projects like this one.</h3>

          <h5>
            Check my work by clicking on the button with the Machine Learning, Backend, Frontend projects and others!
            </h5>
            </p>

          <Buttons className='l_box'>
            
            <button className="language" onClick={navi}>
              <p>Start the visit ?</p>
            </button>
          </Buttons>
        </TextBlock>
    </Front>
    </>
  )
}

const Front = styled.div``
const Profile = styled.div``
const TextBlock = styled.div``
const NavBar = styled.div``
const Buttons = styled.div``