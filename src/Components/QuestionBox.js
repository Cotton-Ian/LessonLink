import React from 'react'
import './QuestionBox.css'

export default function QuestionBox({ questionInfo }) {
    return (
        <div class="center">
            <div class="property-card">
                <a href="#">
                    <div class="property-image">
                        <div class="property-image-title">
                            <h5 className='optional-title' >{questionInfo.question}</h5>
                        </div>
                    </div>
                </a>
                <div class="property-description">
                    <h5 className="card-title">{questionInfo.question}</h5>
                    <p className="card-text">{questionInfo.reponse}</p>
                </div>
            </div>
        </div>
    )
}
