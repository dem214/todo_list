import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList, { Todo } from './todolist';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './todoform'

function saveToStorage(todos:Todo[]) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

export default function App() {

  const [todoLoaded, setTodoLoaded] = useState<boolean>(false)  
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => {
    if (!todoLoaded) {
      setTodos(prevTodos => {
        const json_todos = localStorage.getItem('todos')
        if (json_todos === null) {
          return []
        }
        else {
          return JSON.parse(json_todos)
        }
      })
      setTodoLoaded(prevState => true)
      return
    }
    saveToStorage(todos)
  }, [todos])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTodos(prevTodos => {
      const newTodos = prevTodos.map(todo => {
        if (todo.id.toString() === event.target.id) {
          todo.done = event.target.checked
        }
        return todo
      });
      return newTodos
    });
  }

  function handleDelete(id: string): void {
    setTodos(prevTodos => prevTodos.filter((todo, index, array) => todo.id !== id) )
  }

  function handleCreate(text:string): void {
    const newTodo: Todo = {
      text,
      id: uuidv4(),
      done: false
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }

  return <div>
    <TodoForm handleTextSent={handleCreate}></TodoForm>
    <TodoList todos={todos} handleChange={handleChange} handleDelete={handleDelete}></TodoList>
  </div>
}
