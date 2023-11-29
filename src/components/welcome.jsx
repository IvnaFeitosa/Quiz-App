import Quiz from '../assets/img/quiz.svg'
import "./Welcome.css"
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

const Welcome = () =>{
    //quizState pela os valores e o dispatch altera os valores
    const [quizState, dispatch] = useContext(QuizContext);
    
    
    return(
        <div id='welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Click no botão abaixo para começar</p>
            <button onClick={()=> dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
            <img src={Quiz} alt="inicio do quiz" />
        </div>
    )
}

export default Welcome;