

import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 10rem);
  width: 100vw;
  background-color: #5a5560;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-block: 50px;
`;
export const Text = styled.div`
  h1 {
    font-size: 3rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: #faed26;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: #9d8d8f;
  }

  @media (max-width: 768px) {
    p{
        font-size: 1.2rem;
        padding-inline:1rem;
    }
  }
`;
export const Timer = styled.div`
  min-width: 50%;
  min-height: 20rem;
  margin-top: 2rem;
  backdrop-filter: blur(14px) saturate(180%);
  -webkit-backdrop-filter: blur(14px) saturate(180%);
  background-color: rgba(70, 52, 78, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    width:90%;
  }
`;

export const Countdown = styled.div`
  h1 {
    font-size: 10rem;
    padding: 1rem;
    color: #faed26;
    font-family: "Roboto", sans-serif;
  }
  @media (max-width: 768px) {
    h1{
        font-size: 5rem;
    }
  }
`;
export const Buttons = styled.div`
    display: flex;
    align-items: center;
  button {
    width: 12rem;
    height: 3rem;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    background-color: #faed26;
    border: none;
    border-radius: 6px;
    color: #46344e;
    cursor: pointer;
    margin-inline: 1rem;
  }

  @media (max-width: 768px) {
    button{
        width: 8rem;
    }
  }
`;

export const Tags = styled.div`
  width:24rem;
  height:3rem;
  background-color: #faed26;
  margin-top:1rem;
  border-radius:20px;
  display:flex;
  justify-content: space-around;
  align-items: center;
  padding:1rem;



  button{
    height: 2rem;
    width: 8rem;
    border-radius:inherit;
    border: none;
    text-transform: uppercase;
    color: #9d9d9d;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width:18em;
    button{
        width:6rem;
        font-size:0.7rem;
    }
  }
  .work{
    background-color: ${props => props.initialTime === 25*60 ? '#46344e' : 'unset'};
    color: ${props => props.initialTime === 25*60 ? '#faed26' : 'unset'};
  }
  .shortBreak{
    background-color: ${props => props.initialTime === 5*60 ? '#46344e' : 'unset'};
    color: ${props => props.initialTime === 5*60 ? '#faed26' : 'unset'};

  }
  .longBreak{
    background-color: ${props => props.initialTime === 15*60 ? '#46344e' : 'unset'};
    color: ${props => props.initialTime === 15*60 ? '#faed26' : 'unset'};
  }
`
