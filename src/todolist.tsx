import React from "react";

export interface Todo {
    id: number
    text: string
    done: boolean
  }

interface TodoListProps {
    todos: Todo[],
    handleChange: React.ChangeEventHandler
}

interface TodoItemProps {
    todo: Todo,
    handleChange: React.ChangeEventHandler
}

export function TodoList(props: TodoListProps): JSX.Element {

    function handleChange(event: React.ChangeEvent) {
        props.handleChange(event)
    }

    const todos: Todo[] = props.todos;
    const todoItems: JSX.Element[] = todos.map((todo): JSX.Element => <TodoItem todo={todo}
        handleChange={handleChange}
    ></TodoItem>);
    return <ul>
        {todoItems}
    </ul>
}

function TodoItem(props: TodoItemProps): JSX.Element {
    const todo: Todo = props.todo
    return <li key={todo.id.toString()} className={todo.done ? "done": ""}>
        <input type="checkbox" name={todo.text} id={todo.id.toString()} onChange={props.handleChange}/>
        {todo.text}
    </li>
}
