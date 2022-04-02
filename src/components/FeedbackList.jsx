// Section 15 manage global state
import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0){
        return <p>No feedback found</p>
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item)=>(
                <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    )
}

export default FeedbackList
// end section 15