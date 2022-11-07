import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import Question from './Question'


export default function Quiz() {

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

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(res => res.json())
            .then(data => {
                const newData = data.results.map((elem) => {
                    const answers = elem.incorrect_answers.concat(elem.correct_answer)
                    answers.sort()
                    return { ...elem, answers }
                })
                setQuestionsData(newData)
            })
    }, [])

    function displayQuestions(arr) {
        const questions = arr.map((question, index) => {
            return <Question
                key={nanoid()}
                id={index}
                question={question.question}
                correctAnswer={question.correct_answer}
                answerState={answerState}
            />
        })
        return questions
    }

    return (
        <div>
            <form>
                {displayQuestions(questionsData)}
                <button>
                    Check Answers
                </button>
            </form>
        </div>
    )
}
