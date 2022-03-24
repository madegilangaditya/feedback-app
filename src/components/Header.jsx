// Section 12 Create first components react
import React from 'react'
import PropTypes from 'prop-types'
// End Section 12

function Header({title}) {
  return (
    <header>
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>
  )
}

// Section 12
Header.defaultProps = {
    title: "Feedback UI",
}

Header.propTypes = {
    title: PropTypes.string,
}
// End Section 12

export default Header