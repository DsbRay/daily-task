import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  icon: string
  ctaFunction: () => void
}

const IconButton: React.FC<ButtonProps> = ({ icon, ctaFunction }) => {
  return (
    <Button onClick={ctaFunction}>
      <img src={icon} />
    </Button>
  )
}

const Button = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: none;
  background-color: var(--bunker);
  border-radius: 100%;
  transition: all 0.25s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: var(--shark);
    opacity: 0.8;
  }
  img {
    max-width: 75%;
  }
`

export default IconButton
