import React, { ReactElement, useState } from 'react';
import './App.css';
import {TodoList, Todo} from './todolist';

function App() {
  
  const defaultTodos: Todo[] = [
    {
      id: 1,
      text: 'Yolo',
      done: false
    },
    {
      id: 2,
      text: 'Bolo',
      done: false
    }
  ]

  const [todos, setTodos] = useState(defaultTodos)

  function handleChange(event: React.ChangeEvent) {
    const id = event.target.id
    setTodos(prevTodos => {
      const newTodos =  prevTodos.map(todo => {
        if (todo.id.toString() === id) {
          todo.done = !todo.done
        }
        return todo
      });
      return newTodos;
    });
  }

  return <div>
    <TodoList todos={todos} handleChange={handleChange}></TodoList>
  </div>
}

export default App;
