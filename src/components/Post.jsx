import React from 'react'
// Section 28
// import {useParams} from 'react-router-dom'

// Section 29
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
    // Section 28
    // const params = useParams()

    // Section 29
    const status = 200

    const navigate = useNavigate()

    const onClick = () => {
      console.log('Hello')
      navigate('/about')
    }

    if(status === 404){
      return <Navigate to='/notfound'/>
    }
  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>

        <Routes>
          <Route path='/show' element={<h1>Hello World</h1>}></Route>
        </Routes>
        {/* Section 28 */}
        {/* <p>Name: {params.name}</p> */}
    </div>
  )
}

export default Post