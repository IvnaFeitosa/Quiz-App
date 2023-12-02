import React from "react"
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Question.css";
import Options from "./Options";

const Question = () =>{
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestion];

    return(
        <div id="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestions.question}</h2>
            <div id="options-container">
                {currentQuestions.options.map((option) =>(
                    <Options option={option} key={option}/>
                ))}
            </div>
            <button onClick = {() => dispatch({type: "CHANGE_QUESTION"})}>
                Continuar
            </button>
        </div>
    )

}
export default Question