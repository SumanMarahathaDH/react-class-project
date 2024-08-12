import React from 'react'

const Button = ({children, onClick, ...rest}) => {
  return (
    <button {...rest} onClick={onClick}>{children}</button>
  )
}

export default Button