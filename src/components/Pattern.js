import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="pattern-bg" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .pattern-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;             /* Make it stay in the background */
    pointer-events: none;    /* Prevent it from blocking interactions */

    --c: #09f;
    background-color: #000;

    background-image:
      radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
      radial-gradient(4px 100px at 300px 235px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c) 100%, #0000 150%),
      /* ➕ Paste the rest of your gradients here */
      radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
      radial-gradient(1.5px 1.5px at 150px 105px, var(--c) 100%, #0000 150%);

    background-size:
      300px 235px, 300px 235px, 300px 235px,
      300px 252px, 300px 252px, 300px 252px;
      /* ➕ Continue background sizes matching your original */

    animation: hi 150s linear infinite;
  }

  @keyframes hi {
    0% {
      background-position:
        0px 220px, 3px 220px, 151.5px 337.5px,
        25px 24px, 28px 24px, 176.5px 150px;
        /* ➕ Rest of your initial positions */
    }
    to {
      background-position:
        0px 6800px, 3px 6800px, 151.5px 6917.5px,
        25px 13632px, 28px 13632px, 176.5px 13758px;
        /* ➕ Final positions */
    }
  }
`;

export default Pattern;
