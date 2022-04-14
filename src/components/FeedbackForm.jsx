// Section 19
import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'

// Section 20
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')

    const handleTextChange = (e) =>{
        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* todo - rating select component */}
            
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a Review' value={text}/>
                {/* <button type="submit">Send</button> */}
                <Button type='submit' version='secondary'>
                    Send
                </Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm