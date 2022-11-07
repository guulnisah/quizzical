import React from 'react'
import Quiz from './components/Quiz'
import { Container, StartButton } from './components/Styles'

export default function App() {

  const [gameStarted, setGameStarted] = React.useState(false)

  function startGame() {
    setGameStarted(prevState => !prevState)
  }

  return (
    <Container>
      {
        gameStarted ?
          <Quiz />
          :
          <div className="intro-screen">
            <h1> Quizzical </h1 >
            <p>Test yourself!</p>
            <StartButton className="start-button button" onClick={startGame}>Start Quiz</StartButton>
          </div >
      }

    </Container>
  )
}