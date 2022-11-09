import { useState } from 'react'
import Quiz from './components/Quiz'
import { Container, StartButton } from './components/Styles'
import Selector from './components/Selector'
export default function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [categoryNumber, setCategoryNumber] = useState(0)

  function startGame() {
    setGameStarted(prevState => !prevState)
  }

  return (
    <Container>
      {
        gameStarted ?
          <Quiz categoryNumber={categoryNumber} setGameStarted={setGameStarted} />
          :
          <div className="intro-screen">
            <h1> Quizzical </h1 >
            <p>Test yourself!</p>
            <div className="relative">
              <Selector setCategoryNumber={setCategoryNumber} />
            </div>
            <StartButton className="start-button button" onClick={startGame}>Start Quiz</StartButton>
          </div >
      }

    </Container>
  )
}