import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .loader {
    width: 48px;
    height: 48px;
    position: relative;
  }

  .loader:before {
    content: '';
    width: 48px;
    height: 5px;
    background: #253050;
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: shadow324 0.5s linear infinite;
  }

  .loader:after {
    content: '';
    width: 100%;
    height: 100%;
    background: #044080;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 40px;
    animation: jump7456 0.5s linear infinite;
  }

  @keyframes jump7456 {
    25% {
      transform: translateY(15px) rotate(22.5deg);
    }
    50% {
      transform: translateY(17px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(4px) rotate(50.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow324 {
    0%, 100% {
      transform: scale(1.5, 1);
    }
    50% {
      transform: scale(1, 1);
    }
  }
`;

export default Loader;
