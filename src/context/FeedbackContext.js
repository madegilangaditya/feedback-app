import React from 'react'
import { createContext, useState } from "react"
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'this is feedback item from context 1',
            rating:5
        },
        {
            id:2,
            text: 'this is feedback item from context 2',
            rating:10
        },
        {
            id:3,
            text: 'this is feedback item from context 3',
            rating:7
        }
    ])

    // Section 32
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext