import React from 'react'
import { createContext, useState, useEffect } from "react"
import { v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    // Section 33 add use state for edit
    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    // Section 40 Fetch data from JSON server
    useEffect(()=>{
        fetchFeedback()
    }, [])

    // Fetch feedback function
    const fetchFeedback = async () =>{
        const response = await fetch (`http://localhost:4000/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    // Section 32 Delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    // Add feedback function
    const addFeedback = (newFeedback) =>{
        newFeedback.id = uuidv4()
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback])
    }

    // Section 33 set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    // Section 35 Update Item process
    const updateFeedback = (id, updItem) =>{
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
        )
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext