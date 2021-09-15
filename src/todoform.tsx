import { useState } from "react"

interface TodoFormProps {
    handleTextSent: (text: string) => void
}

export default function TodoForm(props: TodoFormProps): JSX.Element {

    const [text, setText] = useState("")

    function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setText(prevText => "")
        props.handleTextSent(text)
    }

    function handleChange(event:React.ChangeEvent<HTMLInputElement>) {
        setText(prevText => (event.target.value))
    }

    return <form onSubmit={handleSubmit}>
        <input type={"text"} value={text} onChange={handleChange}/>
        <input type="submit"/>
    </form>
}