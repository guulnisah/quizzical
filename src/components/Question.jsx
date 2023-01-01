import { Answers, AnswerButton } from './Styles'
import { decode } from 'html-entities'

export default function Question(props) {
    const answers = props.answers.map((answer, index) => {
        return (
            <AnswerButton
                key={index}
                onClick={(e) => props.handleChange(e, props.id, index)}
                disabled={props.checked}
                selected={props.answerState.options[props.id].selected === decode(answer)}
                correct={answer === props.correctAnswer}
                incorrect={answer !== props.correctAnswer}
            >{decode(answer)}</AnswerButton>
        )
    })

    return (
        <article>
            <h2>{decode(props.question)}</h2>
            <Answers className="quiz-answers">{answers}</Answers>
            <hr />
        </article>
    )
}
