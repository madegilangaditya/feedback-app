// Section 14 State & Usestate Hook
// import { useState } from "react"
import React from 'react'

// Section 16
import Card from "./shared/Card"
import PropTypes from 'prop-types'

// Section 17
import {FaTimes, FaEdit} from 'react-icons/fa'

// Section 32
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackItem({item}) {
    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState('This is an example of Feedback item')

    // Important bisa masukin function and using prev ngambil nilai sebelumnya
    // const handleClick = () => {
    //     setRating((prev) => {
    //         console.log(prev)
    //         return prev + 1
    //     })
    // }

    // section 16 add reverse class

    // // section 17 add class handleClick
    // const handleClick = (id)=>{
    //     console.log(id)
    // }

    // Section 32
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className="close">
                <FaTimes onClick={() => deleteFeedback(item.id)} color="purple"/>
            </button>

            {/* Section 33 */}
            <button className="edit">
                <FaEdit onClick={()=> editFeedback(item)} color='purple'/>
            </button>
            <div className="text-display">
                {item.text}
            </div>
            {/* <button onClick={handleClick}>Click</button> */}

        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}


export default FeedbackItem
// End section 14