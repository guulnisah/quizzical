import styled from 'styled-components'

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
    margin-bottom: 30px;
    }
  }
`

export const Button = styled.button`
  background-color: #4D5B9E;
  border: none;
  border-radius: 10px;
  font-family: 'Inter';
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #F5F7FB;
`

export const StartButton = styled(Button)`
  width: 193px;
  height: 52px;
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

export const GameButton = styled(Button)`
    width: 130px;
    height: 45px;
    font-weight: 600;
    font-size: 10px;
    line-height: 12px;
`
export const Answers = styled.div`
    display: flex;
    margin-bottom: 15px;
    gap: 15px;
    
    @media screen and (max-width: 600px){
      gap: 10px;
    }
`

export const AnswerButton = styled.button`
    border: 1px solid #4D5B9E;
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