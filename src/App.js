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

    return (
        <div className="container">
            {/* section 10 */}
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {/* can input expression */}
            {/* {Math.random() + (5 + 5)} */}

            
            <div className="comments">
                <h3>Comments ({comments.length})</h3>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.text}</li>
                    ))}    
                </ul>
            </div>
            {/* end section 10 */}
        </div>
    )
}

export default App