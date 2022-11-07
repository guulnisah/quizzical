import React from 'react'
import Quiz from './components/Quiz'

export default function App() {

  const [gameStarted, setGameStarted] = React.useState(false)

  function startGame() {
    setGameStarted(prevState => !prevState)
  }

  return (
    <div>
      {
        gameStarted ?
          <Quiz />
          :
          <div className="intro-screen">
            <h1> Quizzical </h1 >
            <p>Test yourself!</p>
            <button className="start-button button" onClick={startGame}>Start Quiz</button>
          </div >
      }

    </div>
  )
}