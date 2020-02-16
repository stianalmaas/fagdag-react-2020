import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './button.styles'

const Button = ({ active, children, onClick }) => {
  return (
    <StyledButton
      onClick={onClick}
      active={active}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button
