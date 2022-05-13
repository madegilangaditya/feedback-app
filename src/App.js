// Section 12
import React from 'react'
import Header from "./components/Header"
// End Section 12

// Section 23
// import { v4 as uuidv4} from 'uuid'

// // Section 14
// import FeedbackItem from "./components/FeedbackItem"
// // end section 14

// Section 15 managing global state
// import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
// import FeedbackData from "./data/FeedbackData"
// end section 15

// Section 18
import FeedbackStats from './components/FeedbackStats'

// Section 19
import FeedbackForm from './components/FeedbackForm'

// Section 25
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage'

//  Section 27
import AboutIconLink from './components/AboutIconLink'

// Section 28
// import Card from './components/shared/Card'
import Post from './components/Post'

// Section 30
import {FeedbackProvider} from './context/FeedbackContext'


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
    // const [feedback, setFeedback] = useState(FeedbackData)
    // end section 15

    // Section 17
    // const deleteFeedback = (id) => {
    //     if(window.confirm('Are you sure to delete?')){
    //         setFeedback(feedback.filter((item) => item.id !== id))
    //     }
    // }

    // Section 23
    // const addFeedback = (newFeedback) =>{
    //     newFeedback.id = uuidv4()
    //     console.log(newFeedback);
    //     setFeedback([newFeedback, ...feedback])
    // }

    return (
        <FeedbackProvider>
            <Router>  
                {/* Section 12 */}
                    {/* Section 13 add props bgColor and textColor for style */}
                <Header />
                    {/* End section 13 */}
                {/* end Section 12 */}

                <div className="container">
                    <Routes>
                        <Route exact path='/' element={
                            <>
                                {/* Section 19 */}
                                <FeedbackForm  />
                                {/* End section 19 */}

                                {/* Section 18 */}
                                <FeedbackStats />
                                {/* end Section 18 */}

                                {/* Section 14 */}
                                <FeedbackList />
                                {/* end section 14 */}
                            </>
                        }>
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

                        
                        </Route>
                        {/* Section 25 */}
                        <Route path="/about" element={<AboutPage />}/>

                        {/* Section 28 */}
                        {/* <Route path="/post/:id/:name" element={<Post />}/> */}

                        {/* Section 29 */}
                        {/* <Route path="/post/" element={<Post />}/> */}
                        <Route path="/post/*" element={<Post />}/>
                        
                    </Routes>
                    {/* Section 23 how to create menu in React */}
                    {/* <Card>
                        <NavLink to='/' activeClassname='active'>
                            Home
                        </NavLink>
                        <NavLink to='/about' activeClassname='active'>
                            About
                        </NavLink>
                    </Card> */}
                    
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
        
    )
}

export default App