// Section 12 Create first components react
import React from 'react'
import PropTypes from 'prop-types'
// End Section 12

function Header({title, bgColor, textColor}) {
  // Section 13 add style into variable 
  const headerStyles ={
    backgroundColor:bgColor, 
    color:textColor,
  }
  // End Section 13

  return (
    // Section 13 add style jsx to header
    <header style={headerStyles}>
    {/* end Section 13 */}
        <div className="container">
            <h2>{title}</h2>
        </div>
    </header>
  )
}

// Section 12
Header.defaultProps = {
    title: "Feedback UI",
    // section 13 add bg color and text color
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
    // end section 13
}

Header.propTypes = {
    title: PropTypes.string,

    // section 13 add bg color and text color proptypes
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    // end section 13
}
// End Section 12

export default Header