import React, { useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import "./css/index.css";
import "./css/card1.css";
import "./css/card2.css";
import "./css/card3.css";
import "./css/card4.css";
import "./css/card5.css";
import styled from "styled-components";

function Front() {

  const [num_spin, setNumSpin] = useState(1);
  const [light, setLight] = useState(false)

  let navigate = useNavigate();

  const go_py = () => {
    console.log('py')
    navigate("python/", {replace: false});
  }
  const go_django = () => {
    navigate("django/", {replace: false});
  }
  const go_react = () => {
    navigate("react/", {replace: false});
  }
  const go_js = () => {
    navigate("js/", {replace: false});
  }
  const go_java = () => {
    navigate("java/", {replace: false});
  }

  const detect_chose_card = () => {
    for (let i = 1; i < 6; i++) {
      if (i==num_spin+1) {
        document.documentElement.style.setProperty(`--card_active${num_spin+1}`, "0");
        document.documentElement.style.setProperty(`--card_size${num_spin+1}`, "1");
      }else {

        document.documentElement.style.setProperty(`--card_active${i}`, "1");
        document.documentElement.style.setProperty(`--card_size${i}`, "0.3");
      }
    }
  }
  
  const spin_caroussel_left = () => {
      if (num_spin < 4) {
        setNumSpin((num_spin) => num_spin + 1);
      } else {
        setNumSpin(0);
      }

    console.log(num_spin);
    if (num_spin == 0) {
      document.documentElement.style.setProperty("--top_carroussel", "10%");
      document.documentElement.style.setProperty("--card_bg", "rgb(23, 141, 0)");

      document.documentElement.style.setProperty("--card_active1", "0");
      document.documentElement.style.setProperty("--card_size1", "1");

      detect_chose_card()
    }
    if (num_spin == 1) {
      document.documentElement.style.setProperty("--top_carroussel", "20%");
      document.documentElement.style.setProperty("--card_bg", "cyan");
      
      
      document.documentElement.style.setProperty("--card_active2", "0");
      document.documentElement.style.setProperty("--card_size2", "1");
      
      detect_chose_card()

    }
    if (num_spin == 2) {
      document.documentElement.style.setProperty("--top_carroussel", "60%");
      document.documentElement.style.setProperty("--card_bg", "lightgreen");

      document.documentElement.style.setProperty("--card_active3", "0");
      document.documentElement.style.setProperty("--card_size3", "1");

      detect_chose_card()
    }
    if (num_spin == 3) {
      document.documentElement.style.setProperty("--top_carroussel", "50%");
      document.documentElement.style.setProperty("--card_bg", "yellow");

      document.documentElement.style.setProperty("--card_active4", "0");
      document.documentElement.style.setProperty("--card_size4", "1");

      detect_chose_card()

    }
    if (num_spin == 4) {
      document.documentElement.style.setProperty("--top_carroussel", "20%");
      document.documentElement.style.setProperty("--card_bg", "red");

      document.documentElement.style.setProperty("--card_active5", "0");
      document.documentElement.style.setProperty("--card_size5", "1");

      detect_chose_card()

    }

    document.documentElement.style.setProperty(
      "--deg_multiplicator",
      `${num_spin}`
    );
  };

  return (
    <>
      <BG className="bg">

        <button className="move_left" onClick={spin_caroussel_left} > 
          next
        </button>
        <div className="banner">
          <div className="slider">
            <div className="item1">

              <div className="content1">
                <h1>PYTHON</h1>
                <p>
                <span >________________________________</span><br />
                <br />
                  <i>I'm using Python for the <span>GUI</span>, the <span>algorithms</span>, the <span>data-analisis</span>, the <span>deep-learning</span> and the <span>machine-learning</span>.</i><br />

                  <span >________________________________</span>

                  <ul>
                    <li><u>Experience:</u> 2 months, 1rst language...</li>
                    <li><u>Best Projects:</u> Paint GUI, Chatbot...</li>
                  </ul>
                </p>
                <button onClick={go_py}>Visit</button>
              </div>
            </div>
            <div className="item2">
              <div className="content2">
                <h1>DJANGO</h1>
                <p>
                <span >________________________________</span><br />
                <br />
                  <i>I'm using Django for the <span>Backend</span> and the <span>API</span> of the website that I create and React for the frontend.</i><br />

                  <span>________________________________</span>

                  <ul>
                    <li><u>Experience:</u> 2 weeks, 5 projects</li>
                    <li><u>Best Projects:</u> E-commerce, School...</li>
                  </ul>
                </p>
                <button onClick={go_django}>Visit</button>
              </div>
            </div>
            <div className="item3">

              <div className="content3">
                <h1>JAVASCRIPT</h1>
                <p>
                <span >________________________________</span><br />
                <br />
                  <i>I'm using JavaScript for the <span>Frontend</span> and the <span>Backend</span> of some of the website that I create and I also use it to do some <span>algorithms</span> and <span>Games</span>.</i><br />

                  <span>________________________________</span>

                  <ul>
                    <li><u>Experience:</u> 2 months, 2nd language...</li>
                    <li><u>Best Projects:</u> Games, Calculator, Animations...</li>
                  </ul>
                </p>
                <button onClick={go_js}>Visit</button>
              </div>
            </div>
            <div className="item4">
              <div className="content4">
                <h1>REACT</h1>
                <p>
                <span >________________________________</span><br />
                <br />
                  <i>I'm using React for the <span>Frontend</span> of the site that I create like this one.</i><br />

                  <span>________________________________</span>

                  <ul>
                    <li><u>Experience:</u> 2 weeks, 4 projects</li>
                    <li><u>Best Projects:</u> Portfolio, E-commerce..</li>
                  </ul>
                </p>
                <button onClick={go_react}>Visit</button>
              </div>
            </div>
            <div className="item5">
              <div className="content5">
                <h1>Java</h1>
                <p>
                <span >________________________________</span><br />
                <br />
                  <i>I'm using Java for the <span>GUI</span>, the <span>algorithms</span> and <span>games</span>.</i><br />

                  <span>________________________________</span>

                  <ul>
                    <li><u>Experience:</u> 2 days, 3rd language...</li>
                    <li><u>Best Projects:</u> Bank, Multi-games GUI...</li>
                  </ul>
                </p>
                <button onClick={go_java}>Visit</button>
              </div>
            </div>
          </div>
        </div>
      </BG>
    </>
  );
}

const BG = styled.div``;
const Card = styled.div``;

export default Front;
