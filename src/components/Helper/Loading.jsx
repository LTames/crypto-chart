import React from 'react';
import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  to {
    rotate: 360deg; 
  }
`;

const StyledLoading = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: rgba(136, 0, 239, 0.8);
  animation: ${loadingAnimation} 800ms infinite;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
`;

function Loading() {
  return <StyledLoading />;
}

export default Loading;
