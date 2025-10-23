import React from 'react';
import styled from 'styled-components';

const Card = ({ title, description, badge, price, githubLink }) => {
  return (
    <StyledWrapper>
      <a className="card1" href={githubLink} target="_blank" rel="noopener noreferrer">
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
        <div className="card-content">
          <p className="badge">{badge}</p>
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p className="domain">
            <strong>Domain:</strong> {price}
          </p>
        </div>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card1 {
    position: relative;
    width: 300px;
    height: 260px;
    background-color: #f2f8f9;
    border-radius: 8px;
    padding: 16px 20px;
    margin: 12px;
    text-decoration: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    z-index: 0;
  }

  .card1::before {
    content: "";
    position: absolute;
    top: -16px;
    right: -16px;
    width: 32px;
    height: 32px;
    background: #1e3a8a; /* bg-blue-900 */
    border-radius: 32px;
    z-index: -1;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.3s ease-out;
  }

  .card1:hover::before {
    transform: scale(21);
  }

  .card1:hover p,
  .card1:hover h3 {
    color: rgba(255, 255, 255, 0.9);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }

  .badge {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    color: #1e3a8a; /* Updated to match theme */
    margin: 0;
  }

  h3 {
    font-size: 17px;
    font-weight: bold;
    margin: 0;
    color: #111;
  }

  .description {
    font-size: 14px;
    color: #444;
    line-height: 18px;
    margin: 0;
  }

  .domain {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #333;
  }

  .go-corner {
    position: absolute;
    top: 0;
    right: 0;
    width: 32px;
    height: 32px;
    background-color: #1e3a8a; /* bg-blue-900 */
    border-radius: 0 4px 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }
`;

export default Card;