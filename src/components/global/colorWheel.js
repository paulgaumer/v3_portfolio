import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const Container = styled.div`
  /* figure {
    width: 250px;
    height: 245px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -180px 0 0 -210px;
    padding-left: 70px;
    -webkit-transform: scale(0.7, 0.7);
    transform: scale(0.7, 0.7);
  } */
  .wheel {
    position: relative;
    width: 60px;
    height: 60px;
    border: 2px solid red;
  }
  .colorLeaf {
    width: 20px;
    height: 20px;
    border-radius: 0 100%;
    opacity: 0.8;
    position: absolute;
    top: 8px;
    left: 9px;
    transform-origin: 100% 100%;
    -webkit-animation: intro 2s;
    animation: intro 2.5s;
    mix-blend-mode: hard-light;
  }

  .colorLeaf:nth-child(1) {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    background: #f1b53b;
  }
  .colorLeaf:nth-child(2) {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    background: #ea6e32;
  }
  .colorLeaf:nth-child(3) {
    transform: rotate(40deg);
    -webkit-transform: rotate(40deg);
    background: #e02425;
  }
  .colorLeaf:nth-child(4) {
    transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
    background: #e12766;
  }
  .colorLeaf:nth-child(5) {
    transform: rotate(80deg);
    -webkit-transform: rotate(80deg);
    background: #e329a6;
  }
  .colorLeaf:nth-child(6) {
    transform: rotate(100deg);
    -webkit-transform: rotate(100deg);
    background: #e42ae3;
  }
  .colorLeaf:nth-child(7) {
    transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
    background: #a226e0;
  }
  .colorLeaf:nth-child(8) {
    transform: rotate(140deg);
    -webkit-transform: rotate(140deg);
    background: #5d1fdc;
  }
  .colorLeaf:nth-child(9) {
    transform: rotate(160deg);
    -webkit-transform: rotate(160deg);
    background: #1918d8;
  }
  .colorLeaf:nth-child(10) {
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    background: #2363df;
  }
  .colorLeaf:nth-child(11) {
    transform: rotate(200deg);
    -webkit-transform: rotate(200deg);
    background: #31abea;
  }
  .colorLeaf:nth-child(12) {
    transform: rotate(220deg);
    -webkit-transform: rotate(220deg);
    background: #3df1f2;
  }
  .colorLeaf:nth-child(13) {
    transform: rotate(240deg);
    -webkit-transform: rotate(240deg);
    background: #3af0b3;
  }
  .colorLeaf:nth-child(14) {
    transform: rotate(260deg);
    -webkit-transform: rotate(260deg);
    background: #38ee75;
  }
  .colorLeaf:nth-child(15) {
    transform: rotate(280deg);
    -webkit-transform: rotate(280deg);
    background: #36ec37;
  }
  .colorLeaf:nth-child(16) {
    transform: rotate(300deg);
    -webkit-transform: rotate(300deg);
    background: #78f13c;
  }
  .colorLeaf:nth-child(17) {
    transform: rotate(320deg);
    -webkit-transform: rotate(320deg);
    background: #b4f43c;
  }
  .colorLeaf:nth-child(18) {
    transform: rotate(340deg);
    -webkit-transform: rotate(340deg);
    background: #fbfa48;
  }

  @keyframes intro {
    0% {
      transform: rotate(-10deg);
    }
  }
  @-webkit-keyframes intro {
    0% {
      -webkit-transform: rotate(-10deg);
    }
  }
`

const ColorWheel = () => {
  const divNumber = 19

  function onTapCancel(event, info) {
    alert("Yoo")
  }

  return (
    <Container>
      <motion.div
        className="wheel"
        animate={{
          rotate: 360,
          transition: {
            delay: 2,
            duration: 1,
            ease: "easeInOut",
            // loop: Infinity,
          },
        }}
        whileTap={{ scale: 0.8 }}
        // onClick={onTapCancel}
      >
        {[...Array(divNumber)].map((e, i) => (
          <div className="colorLeaf" key={i} />
        ))}
      </motion.div>
    </Container>
  )
}

export default ColorWheel
