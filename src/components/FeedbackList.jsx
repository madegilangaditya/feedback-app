// Section 15 manage global state
import React from 'react'
import FeedbackItem from './FeedbackItem'

// Section 16
import PropTypes from 'prop-types'

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

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.text.isRequired,
            rating:PropTypes.number.isRequired,
        })
    ),
}

export default FeedbackList
// end section 15