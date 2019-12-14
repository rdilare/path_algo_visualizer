
import  { keyframes } from 'styled-components';
 
export const keyFramePath = keyframes`
  0% {
    background: orange;
    //border-radius:100%;
    // border: 15px solid #fff;

  }
  50%{
    background:red;
    // border-radius:50%;
  }
  100% {
    background: #0f0;
    transform:rotate(90deg);
  }
`

export const keyFrameWall = keyframes`
  0% {
    background: #000;
    transform:scale(.8);

  }
  80% {
    transform:scale(1.2);

  }
  100% {
    background: #630;
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
    background: #0ff;
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