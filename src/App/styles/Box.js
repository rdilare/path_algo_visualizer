import styled from 'styled-components';
 
import { keyFrameExampleOne } from './KeyFrames';
 
export const Box = styled.div`
  display: inline-block;
  background: #00f;
  width: ${props=>props.w};
  height: 30px;
  position: relative;
  margin:0px;
  border:.1px solid #5500;

  // animation: ${keyFrameExampleOne} 2s ease-in-out 0s infinite;
  animation: ${keyFrameExampleOne} 2s ease-in-out 0s 1;
`
 
export default Box;