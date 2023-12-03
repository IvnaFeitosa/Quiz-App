import React from "react"
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Question.css";
import Options from "./Options";

const Question = () =>{
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestions = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: {answer:currentQuestions.answer, option},
        })
    };

    return(
        <div id="question">
            <p>
                Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
            </p>
            <h2>{currentQuestions.question}</h2>
            <div id="options-container">
                {currentQuestions.options.map((option) =>(
                    <Options 
                    option={option} 
                    key={option} 
                    answer ={currentQuestions.answer}
                    SelectOption = {() => onSelectOption(option)}
                    
                    />
                ))}
            </div>
                {quizState.answerSelected && (
                    <button onClick = {() => dispatch({type: "CHANGE_QUESTION"})}>
                        Continuar
                    </button>      
                )}
            
        </div>
    )

}
export default Question