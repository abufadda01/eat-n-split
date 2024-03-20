import React from 'react'

const Button = ({children , handleFormOpen}) => {
  return (
    // children props will be the text value
    <button onClick={handleFormOpen} className='button'>{children}</button>
  )
}

export default Button