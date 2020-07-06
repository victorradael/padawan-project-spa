import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("https://images.unsplash.com/photo-1445905595283-21f8ae8a33d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80");
`;

export const BlackGlass = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  grid-template-columns: 1fr 5fr;

  div {
    align-items: center;
    /* justify-content: center; */

    text-align: center;
    box-sizing: border-box;
    img {
      padding: 54px 0 0 54px;
      height: 800px;
    }
  }
`;

export const Fade = styled.div`
  position: relative;
  width: 100%;
  min-height: 20vh;
  /* top: -40px; */
  background-image: linear-gradient(0deg, transparent, black 75%);
  z-index: 1;
  box-sizing: border-box;
`;

const fadeIn = keyframes`
  0% {
    top: -100px;
    transform: rotateX(25deg)  translateZ(0);
  }
    100% { 
    top: -6300px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

export const StarWars = styled.section`
  display: flex;
  box-sizing: border-box;

  position: relative;
  height: 600px;
  color: #feda4a;
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;

  div {
    position: relative;
    top: 99999px;
    transform-origin: 50% 100%;

    font-size: 100%;
    text-align: center;

    div {
      h1 {
        margin: 0 0 100px;
        text-transform: uppercase;
      }
    }

    animation: 40s ${fadeIn} ease-out infinite;
  }
`;
