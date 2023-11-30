
import { useContext, useEffect } from 'react'
import './App.css'
import Welcome from './components/welcome'

import Question from './components/Question'
import { QuizContext } from './context/quiz'


function App() {
  const [quizState,dispatch] = useContext(QuizContext);

useEffect(()=>{
    //embaralhar as perguntas
    dispatch({type:"REORDER_QUESTIONS"})
}, [])

  return (
      <div className="App">
        <h1>Quiz de programação</h1>
        {quizState.gameStage === "Start" && <Welcome/>}
        {quizState.gameStage === "Playing" && <Question/>}
      </div>
     
  )
}

export default App
