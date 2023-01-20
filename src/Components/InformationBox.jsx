import React from 'react'
import './InformationBox.css'
export default function InformationBox({ questions }) {

    //Fonction qui retourne le nombre de question single
    const getSingleQuestion = () => {
        let singleQuestion = 0
        questions.forEach((question) => {
            if (question.type === 'single') {
                singleQuestion++
            }
        })
        return singleQuestion
    }

    const getMultipleQuestion = () => {
        let singleQuestion = 0
        questions.forEach((question) => {
            if (question.type === 'multiple') {
                singleQuestion++
            }
        })
        return singleQuestion
    }

    return (
        <div className="informationBox">
            <h4>Information</h4>
            <p>Nombre de questions : {questions.length} </p>
            <p>Nombres de réponses unique : {getSingleQuestion()} </p>
            <p>Nombre de choix mutliples : {getMultipleQuestion()} </p>
            <button className="glow-on-hover">Ajouter</button>
        </div>
    )
}
