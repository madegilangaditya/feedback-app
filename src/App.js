// Section 12
import React from 'react'
import Header from "./components/Header"
// End Section 12

// // Section 14
// import FeedbackItem from "./components/FeedbackItem"
// // end section 14

// Section 15 managing global state
import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
// end section 15

function App (){
    // section 10
    // const title = 'Hellow World'
    // const body = 'This Body'
    // const comments = [
    //     {id:1, text:'comment one'},
    //     {id:2, text:'comment two'},
    //     {id:3, text:'comment three'},
    // ]
    // end section 10

    // Section 11 conditional JSX
    // const loading = false
    // // const showComments = true
    // // const commentsBlock = (
    // //     <div className="comments">
    // //         <h3>Comments ({comments.length})</h3>
    // //         <ul>
    // //             {comments.map((comment, index) => (
    // //                 <li key={index}>{comment.text}</li>
    // //             ))}    
    // //         </ul>
    // //     </div>
    // // )
    // if(loading) return <h1>Loading...</h1>
    // // End Section 11

    // Section 15 managing global state
    const [feedback, setFeedback] = useState(FeedbackData)
    // end section 15

    // Section 17
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return (
        <>  
            {/* Section 12 */}
                {/* Section 13 add props bgColor and textColor for style */}
            <Header />
                {/* End section 13 */}
            {/* end Section 12 */}

            <div className="container">
                {/* section 10 */}
                {/* <h1>{title.toUpperCase()}</h1>
                <p>{body}</p> */}
                {/* can input expression */}
                {/* {Math.random() + (5 + 5)} */}

                {/* Section 11 */}
                {/* {showComments && commentsBlock }             */}
                {/* end Section 11 */}

                {/* <div className="comments">
                    <h3>Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={index}>{comment.text}</li>
                        ))}    
                    </ul>
                </div> */}
                {/* end section 10 */}

                {/* Section 14 */}
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
                {/* end section 14 */}
            </div>
        </>
        
    )
}

export default App