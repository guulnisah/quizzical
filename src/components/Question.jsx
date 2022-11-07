import { Answers, AnswerButton } from './Styles'

export default function Question(props) {

    const answers = props.answers.map((answer, index) => {
        return (
            <AnswerButton
                key={index}
            >{answer}</AnswerButton>
        )
    })

    return (
        <article>
            <h2>{props.question}</h2>
            <Answers className="quiz-answers">{answers}</Answers>
            <hr />
        </article>
    )
}
