import styled from 'styled-components';
 
import { keyFrameExampleOne } from './KeyFrames';
 
export const Box = styled.div`
  display: inline-block;
  background: #ff0;
  width: ${props=>props.w};
  height: ${props=>props.h};
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite;
  animation: ${keyFrameExampleOne} 1s ease-in 0s 1;
`
 
export default Box;