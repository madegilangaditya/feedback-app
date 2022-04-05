// Section 14 State & Usestate Hook
// import { useState } from "react"

// Section 16
import Card from "./shared/Card"
import PropTypes from 'prop-types'

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
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
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