import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Question from './Question'
import { QuizContainer, BackButton, GameButton, Spinner } from './Styles'

export default function Quiz({ categoryNumber, setGameStarted }) {
    const [isLoading, setIsLoading] = useState(false)
    const [checked, setChecked] = useState(false)
    const [questionsData, setQuestionsData] = useState([])
    const [answerState, setAnswerState] = useState({
        options: [
            { questNum: 0, selected: "" },
            { questNum: 1, selected: "" },
            { questNum: 2, selected: "" },
            { questNum: 3, selected: "" },
            { questNum: 4, selected: "" }
        ]
    });
    const [score, setScore] = useState(0)

    function getQuestions() {
        setIsLoading(true)
        fetch(`https://opentdb.com/api.php?amount=5&type=multiple&category=${categoryNumber}`)
            .then(res => res.json())
            .then(data => {
                const newData = data.results.map((elem) => {
                    const answers = elem.incorrect_answers.concat(elem.correct_answer)
                    answers.sort()
                    return { ...elem, answers }
                })
                setQuestionsData(newData)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        getQuestions()
    }, [])

    function newGame() {
        setChecked(false)
        getQuestions()
    }

    function handleChange(e, questionID) {
        e.preventDefault()
        const { textContent } = e.target;
        setAnswerState((prevState) => {
            return {
                ...prevState,
                options: prevState.options.map((opt) => {
                    if (opt.questNum === questionID) {
                        return { ...opt, selected: textContent };
                    } else {
                        return { ...opt };
                    }
                })
            };
        });
    };

    function submitAnswers() {
        setChecked(true)
        const answers = questionsData.map((elem, index) => {
            return elem.correct_answer === answerState.options[index].selected
        })
        setScore(answers.filter(Boolean).length)
    };

    function displayQuestions(arr) {
        const questions = arr.map((question, index) => {
            return <Question
                checked={checked}
                key={nanoid()}
                id={index}
                question={question.question}
                correctAnswer={question.correct_answer}
                answers={question.answers}
                handleChange={handleChange}
                answerState={answerState}
            />
        })
        return questions
    }

    return (
        <QuizContainer>

            {isLoading ?
                <Spinner />
                :
                <>
                    <BackButton onClick={() => setGameStarted(prevState => !prevState)}>
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="call-made">
                                <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z" fill="#111517" />
                            </g>
                        </svg>

                        Go Back
                    </BackButton>
                    <form>
                        {displayQuestions(questionsData)}
                        {
                            <div className="button-container">
                                {checked ? <>
                                    <span>You scored {score} / 5 correct answers</span>
                                    <GameButton onClick={newGame}>
                                        Play Again
                                    </GameButton>
                                </>
                                    :
                                    <GameButton onClick={submitAnswers}>
                                        Check Answers
                                    </GameButton>}
                            </div>
                        }
                    </form>
                </>
            }


        </QuizContainer>
    )
}
