import styled, { keyframes } from 'styled-components'

/* Containers */
export const Container = styled.main`
  .intro-screen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #293264;
    text-align: center;
    
    h1 {
      font-family: 'Karla', sans-serif;
      font-weight: 700;
      font-size: 31.25px;
      line-height: 37px;
      margin-bottom: 7px;
    }
    
    p {
    font-family: 'Inter';
    font-size: 16px;
    line-height: 19px;
    }
    
    .relative {
      position:relative;
      height: 30px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`

export const QuizContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 3rem;
  
  hr {
      border: 1px solid #DBDEF0;
      margin-bottom: 15px;
  }
  
  h2 {
      font-family: 'Karla', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #293264;
      margin-bottom: 10px;
  }
  
  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    span {
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 12;
      text-align: center;
      color: #293264;
    }
  }
  
  @media screen and (max-width: 600px){
  padding: 1rem;
  }
`

/* Buttons */
export const Button = styled.button`
  background-color: #4D5B9E;
  border: none;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #F5F7FB;
  cursor: pointer;
  
  &:hover {
    transition: 0.5s ease;
    background-color: transparent;
    color: #293264;
    border: 1px solid #293264;
  }
`

export const StartButton = styled(Button)`
  width: 200px;
  height: 55px;
`

export const BackButton = styled(Button)`
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100px;
  height: 35px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
  path {
    fill: #fff;
  }
  
  &:hover {
    path {
      fill:#293264; 
    }
  }
`

export const GameButton = styled(Button)`
  width: 130px;
  height: 45px;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 12px;
`

/* Loading Spinner */

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #293264;
  border-color: #293264 transparent #293264 transparent;
  animation: ${spin} 1.2s linear infinite;
`

/* Answers Container and Button  */
export const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  gap: 15px;
  
  @media screen and (max-width: 600px){
    gap: 10px;
  }
`

export const AnswerButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 20px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  color: #293264;
  background-color: ${({ selected, disabled, correct, incorrect }) => {
    if (disabled && correct) { return "#94D7A2" }
    else if (disabled && incorrect && selected) { return "#F8BCBC" }
    else if (selected) { return "#D6DBF5" }
    else { return "transparent" }
  }};
  border: ${({ selected }) => {
    return selected ? "none" : "1px solid #4D5B9E"
  }};
  
  &:disabled {
    opacity: ${({ correct }) => {
    return correct ? "1" : "0.5"
  }};
    border: ${({ selected, correct, incorrect }) => {
    if (!selected && incorrect) { return "1px solid #4D5B9E" }
    else if (correct) { return "none" }
    else if (incorrect) { return "none" }
    else if (selected) { return "none" }
  }};;
    border-radius: 8px;
  }
  
  @media screen and (max-width: 600px){
    padding: 5px;
  }
`