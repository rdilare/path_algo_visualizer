
import  { keyframes } from 'styled-components';
 
export const keyFrameExampleOne = keyframes`
  0% {
    background: orange;
  }
  50%{
    background:red;
    border-radius:50%;
  }
  100% {
    background: #f42;
  }
`

export const keyFrameWall = keyframes`
  0% {
    background: #000;
    border-radius:100%;

  }
  95% {
    transform:scale(1.2);

  }
  100% {
    background: #466;
    border-radius:0%;
    transform:scale(1)


  }
`

export const keyFrameSearched = keyframes`
   0% {
    background: #ff0;
    border:10px solid #fff;
    border-radius:100%;
  }
  50%{
    background:#0f0;
    border-radius:50%;
  }
  100% {
    background: #0f9;
  }
`

export const keyFrameStartBox = keyframes`
   0% {
    border:10px solid #fff;
    border-radius:100%;
  }

  100% {
   border-radius:0%;
  }
`
export const keyFrameGoalBox = keyframes`
   0% {
    border:10px solid #fff;
    border-radius:100%;
  }

  100% {
   border-radius:0%;
  }
`