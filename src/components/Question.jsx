import React from "react"
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Question = () =>{
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestion];

    return(
        <div id="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestions.question}</h2>
            <div id="options container">
                <p>{currentQuestions.options}</p>
            </div>
            <button>Continuar</button>
        </div>
    )

}
export default Question