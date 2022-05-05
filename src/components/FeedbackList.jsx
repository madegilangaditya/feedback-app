// Section 15 manage global state
import React from 'react'
import FeedbackItem from './FeedbackItem'

// Section 16
// import PropTypes from 'prop-types'

// Section 24
import {motion, AnimatePresence} from 'framer-motion'

// Section 31
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    // Section 31
    const { feedback } = useContext(FeedbackContext)

    if(!feedback || feedback.length === 0){
        return <p>No feedback found</p>
    }

    // Section 24
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item)=>(
                    <motion.div
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className='feedback-list'>
    //         {feedback.map((item)=>(
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    // )
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number.isRequired,
//             text:PropTypes.string.isRequired,
//             rating:PropTypes.number.isRequired,
//         })
//     ),
// }

export default FeedbackList
// end section 15