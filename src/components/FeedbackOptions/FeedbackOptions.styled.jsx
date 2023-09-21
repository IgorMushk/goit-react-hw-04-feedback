import { styled } from 'styled-components';

export const FeedbackBtn = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ButtonStyle = styled.button`
  border-radius: 4px;
  width: 75px;
  height: 30px;
  text-transform: capitalize;
  transition: linear 300ms;

  &.good {
    border: 1px solid #24b81f;
  }
  &.good:hover {
    background-color: #24b81f;
    color: white;
    cursor: pointer;
  }
  &.good:active {
    scale: 0.85;
  }

  &.neutral {
    border: 1px solid #c7b406;
  }
  &.neutral:hover {
    background-color: #c7b406;
    color: white;
    cursor: pointer;
  }
  &.neutral:active {
    scale: 0.85;
  }

  &.bad {
    border: 1px solid #ec5252;
  }
  &.bad:hover {
    background-color: #ec5252;
    color: white;
    cursor: pointer;
  }
  &.bad:active {
    scale: 0.85;
  }
`;
