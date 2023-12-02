import { createContext, useReducer } from "react";
import questions from '../assets/data/questions'

const STAGES = [ "Start", "Playing", "End"]

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}
//Possibilidade de mudar o estado
const quizReducer = (state, action) =>{
    console.log(state,action);
    switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage:STAGES[1]
            };

        case "REORDER_QUESTIONS":
            const reordenedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return{
                ...state,
                questions:reordenedQuestions,
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion +1;
            let endGame = false;
            if(nextQuestion == 4){
                endGame = true;
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame? STAGES[2] : state.gameStage,
            }
        default:
            return state;
    }
}

export const QuizContext = createContext()

export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}> {children} </QuizContext.Provider>;
}