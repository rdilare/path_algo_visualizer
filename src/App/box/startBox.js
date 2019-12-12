import styled from 'styled-components';
 
import { keyFrameStartBox } from './KeyFrames';
 
export const StartBox = styled.div`
  display: inline-block;
  background: #f00;
  width: ${props=>props.w};
  height: ${props=>props.h};
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFrameStartBox} 2s ease-in-out 0s infinite;
  animation: ${keyFrameStartBox} .2s ease-in-out 0s 1;
`
 
export default StartBox;