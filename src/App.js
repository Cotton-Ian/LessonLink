import { useState } from 'react'
import './App.css'
import QuestionBox from './Components/QuestionBox'

function App() {
    const cours = 'React'
    const coursDescription =
        'React est un framework JavaScript open-source développé par Facebook depuis 2013. ' +
        ' Il est utilisé pour développer des interfaces utilisateurs, des applications mobiles et des applications frontales pour le web.'

    const [questions] = useState([
        {
            id: '1',
            question: "Qu'est ce qu'un composant React ?",
            reponse:
                "Un composant React est une fonction ou une classe qui prend des entrées appelées props et renvoie un élément React qui décrit ce que doit apparaître à l'écran.",
            color: '#00c774',
        },
        {
            id: '2',
            question: "Qu'est ce qu'une classe React ?",
            reponse:
                "Une classe React est une fonction ou une classe qui prend des entrées appelées props et renvoie un élément React qui décrit ce que doit apparaître à l'écran.",
            color: '#0074c7',
        },
        {
            id: '3',
            question: "Qu'est ce qu'une fonction React ?",
            reponse:
                "Une fonction React est une fonction ou une classe qui prend des entrées appelées props et renvoie un élément React qui décrit ce que doit apparaître à l'écran.",
            color: '#eb2639',
        },
    ])

    return (
        <div className="App">
            <h1>Cours : {cours}</h1>
            <p>{coursDescription}</p>
            <div className="cardContainer">
                {questions.map((question) => (
                    <QuestionBox key={question.id} questionInfo={question} />
                ))}
            </div>
        </div>
    )
}

export default App
