// Section 19
import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'

// Section 20
import Button from './shared/Button'

// Section 22
import RatingSelect from './RatingSelect'

function FeedbackForm() {
    const [text, setText] = useState('')

    // Section 22
    const [rating, setRating] = useState(10)
    console.log(rating)

    // Section 21
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) =>{
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('Text must be at least 10 characters')
        }else{
            setBtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* todo - rating select component */}
            <RatingSelect select={(rating) => {
                setRating(rating)
                
                }}/>
            
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a Review' value={text}/>
                {/* <button type="submit">Send</button> */}
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>
                    Send
                </Button>
            </div>

            {/* Section 21 form validation */}
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm