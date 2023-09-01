import React, { useState, ChangeEvent } from 'react'
import { TodoList } from '../elements'
import { TodoProps } from '../../modals/todo'

import styled from 'styled-components'
const PersonalScreen: React.FC<{}> = () => {
  const [taskValue, setTaskValue] = useState('')
  const [todos, setTodos] = useState<TodoProps[]>([])

  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => setTaskValue(e.target.value)

  const addTodo = (newTodo: TodoProps) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTaskValue('')
  }

  return (
    <Container>
      <p>Personal Development</p>
      <TodoList
        title='personal'
        todos={todos}
        inputValue={taskValue}
        setValue={handleSetValue}
        setList={setTodos}
        addTodo={addTodo}
      />
    </Container>
  )
}

const Container = styled.div``

export default PersonalScreen
