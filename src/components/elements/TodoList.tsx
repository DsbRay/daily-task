import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { TodoListProps, TodoProps } from '../../modals/todo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const TodoList: React.FC<TodoListProps> = ({ title = 'test', todos, inputValue, setValue, setList, addTodo }) => {
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return
    }
    const items = Array.from(todos)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setList(items)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event)

  const createId = (value: string) => {
    const urlFriendlyString = value.replace(/\s+/g, '-')
    const randomTwoDigitNumber = Math.floor(Math.random() * 90) + 10
    return `${urlFriendlyString}-${randomTwoDigitNumber}`
  }

  const addNewTodo = () => {
    const newTodo: TodoProps = {
      id: createId(inputValue),
      title: inputValue,
      complete: false,
    }
    addTodo(newTodo)
  }

  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue) {
      addNewTodo()
    }
  }

  return (
    <TodoContainer>
      <h2>{title}</h2>
      <form onSubmit={handleTodoSubmit}>
        <input placeholder='Create a Todo...' type='text' onChange={handleInputChange} value={inputValue} />
      </form>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='todoList'>
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo: any, index: number) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided: any) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {todo.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </TodoContainer>
  )
}

const TodoContainer = styled.div``

export default TodoList
