import styled from 'styled-components';
 
import { keyFrameExampleOne } from './KeyFrames';
 
export const Box = styled.div`
  display: inline-block;
  background: #f42;
  width: ${props=>props.w};
  height: 30px;
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite;
  animation: ${keyFrameExampleOne} 2s ease-in-out 0s 1;
`
 
export default Box;