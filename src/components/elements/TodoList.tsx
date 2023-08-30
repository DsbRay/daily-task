import React from 'react'
import styled from 'styled-components'

interface TodoProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

const TodoList: React.FC<TodoProps> = ({ handleInputChange, inputValue }) => {
  return (
    <TodoContainer>
      <input placeholder='Create a Todo...' type='text' onChange={handleInputChange} value={inputValue} />
    </TodoContainer>
  )
}

const TodoContainer = styled.div``

export default TodoList
