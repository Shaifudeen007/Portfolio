import React from 'react';
import styled from 'styled-components';

const DownloadButton = () => {
  return (
    <StyledWrapper>
      <a href="/Shaif_CV.pdf" download>
        Download CV
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  a {
    --color: #0077ff;
    font-family: inherit;
    display: inline-block;
    width: 8em;
    height: 2.8em;
    line-height: 2.6em;
    text-align: center;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    margin: 20px;
    font-size: 17px;
    z-index: 1;
    color: var(--color);
    border: 2px solid var(--color);
    border-radius: 6px;
    position: relative;
    transition: color 0.3s ease;
  }

  a::before {
    position: absolute;
    content: "";
    background: var(--color);
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  a:hover {
    color: white;
  }

  a:hover::before {
    top: -30px;
    left: -30px;
  }
`;

export default DownloadButton;
