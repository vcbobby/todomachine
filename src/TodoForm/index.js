import React from 'react'
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onCancel = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla"
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button-cancel" type="button" onClick={onCancel}>
                    cancelar
                </button>
                <button className="TodoForm-button TodoForm-button-add" type="submit">
                    añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }