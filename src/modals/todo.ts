import { ChangeEvent } from 'react'

export interface TodoListProps {
  todos: TodoProps[]
  // onDragEnd: (e: any) => void
  inputValue: string
  setValue: (e: ChangeEvent<HTMLInputElement>) => void
  title: string
  setList: (e: TodoProps[]) => void
  addTodo: (e: TodoProps) => void
}

export interface TodoProps {
  id: string
  title: string
  complete: boolean
}

