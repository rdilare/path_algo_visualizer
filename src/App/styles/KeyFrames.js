
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