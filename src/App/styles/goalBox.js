import styled from 'styled-components';
 
import { keyFrameGoalBox } from './KeyFrames';
 
export const GoalBox = styled.div`
  display: inline-block;
  background: #0f0;
  width: ${props=>props.w};
  height: 30px;
  position: relative;
  margin:0px;
  border:.1px solid #0001;
  box-sizing: border-box;

  // animation: ${keyFrameGoalBox} 2s ease-in-out 0s infinite;
  animation: ${keyFrameGoalBox} .2s ease-in-out 0s 1;
`
 
export default GoalBox;