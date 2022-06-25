import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../Redux/todos/todosSlice"

const Input = () => {
    const [todo, setTodo] = useState('')
    const disPatch = useDispatch()

    return (
        <div className="text-center">
            <form action="submit" onSubmit={(item) => {
                item.preventDefault()
                todo && disPatch(addTodo(todo))
                setTodo('')
            }}>
                <input className="border mt-2 px-2 focus:outline-none" type="text" placeholder="What needs to be done?"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Input