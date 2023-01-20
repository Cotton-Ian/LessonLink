import React from 'react'
import './QuestionBox.css'

export default function QuestionBox({ questionInfo }) {
    return (
        <div className="center">
            <div className="property-card">
                <a href="#">
                    <div className="property-image">
                        <div className="property-image-title">
                            <h5 className='optional-title' >{questionInfo.question}</h5>
                        </div>
                    </div>
                </a>
                <div className="property-description">
                    <h5 className="card-title">{questionInfo.question}</h5>
                    <p className="card-text">{questionInfo.reponse}</p>
                </div>
            </div>
        </div>
    )
}
