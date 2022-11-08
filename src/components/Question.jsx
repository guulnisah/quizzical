import { Answers, AnswerButton } from './Styles'

export default function Question(props) {
    const answers = props.answers.map((answer, index) => {
        return (
            <AnswerButton
                key={index}
                onClick={(e) => props.handleChange(e, props.id, index)}
                disabled={props.checked}
                selected={props.answerState.options[props.id].selected === answer}
                correct={answer === props.correctAnswer}
                incorrect={answer !== props.correctAnswer}
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
