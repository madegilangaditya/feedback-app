// Section 12
import Header from "./components/Header"
// End Section 12

function App (){
    // section 10
    const title = 'Hellow World'
    const body = 'This Body'
    const comments = [
        {id:1, text:'comment one'},
        {id:2, text:'comment two'},
        {id:3, text:'comment three'},
    ]
    // end section 10

    // Section 11 conditional JSX
    const loading = false
    const showComments = true
    const commentsBlock = (
        <div className="comments">
            <h3>Comments ({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}    
            </ul>
        </div>
    )
    if(loading) return <h1>Loading...</h1>
    // End Section 11

    return (
        <>  
            {/* Section 12 */}
            <Header />
            {/* end Section 12 */}

            <div className="container">
                {/* section 10 */}
                <h1>{title.toUpperCase()}</h1>
                <p>{body}</p>
                {/* can input expression */}
                {/* {Math.random() + (5 + 5)} */}

                {/* Section 11 */}
                {showComments && commentsBlock }            
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
            </div>
        </>
        
    )
}

export default App