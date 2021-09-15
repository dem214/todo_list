type DeleteEventHandler = (id: string) => void

export interface Todo {
    id: string
    text: string
    done: boolean
  }

interface TodoListProps {
    todos: Todo[],
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleDelete: DeleteEventHandler
}

interface TodoItemProps {
    todo: Todo,
    key: string,
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleDelete: DeleteEventHandler
}

export default function TodoList(props: TodoListProps): JSX.Element {

    const todos: Todo[] = props.todos;
    const todoItems: JSX.Element[] = todos.map((todo): JSX.Element => <TodoItem todo={todo}
        handleChange={props.handleChange}
        handleDelete={props.handleDelete}
        key={todo.id.toString()}
    ></TodoItem>);
    return <ul>
        {todoItems}
    </ul>
}

function TodoItem(props: TodoItemProps): JSX.Element {

    const todo: Todo = props.todo

    function handleDelete(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        props.handleDelete(todo.id)
    }

    return <li key={props.key} className={todo.done ? "done": ""}>
        <input
            type="checkbox"
            name={todo.text}
            id={todo.id.toString()}
            onChange={props.handleChange}
            checked={todo.done}
        />
        {todo.text}
        <button placeholder="Add todo"onClick={handleDelete}>Delete</button>
    </li>
}


