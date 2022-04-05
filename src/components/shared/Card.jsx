// Section 16 Card Components
import React from 'react'
import PropTypes from 'prop-types'

function Card({children, reverse}) {
//   return (
//     <div className={`card ${reverse && 'reverse'}`}>
//         {children}
//     </div>
//   )
// Using style jsx
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#ffffff' : '#000'
        }
        }>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card
// End Section 16 Card Components