import Quiz from './assets/img/quiz.svg'

const Welcome = () =>{
    return(
        <div>
            <h2>Seja bem-vindo</h2>
            <p>Click no botão abaixo para começar</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="" />
        </div>
    )
}

export default Welcome;