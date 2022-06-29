import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick, ...rest }) => (
  <button onClick={onClick} {...rest}>
    {children}
  </button>
)

export default Button
