import React from 'react'
import { TodoCounter } from '../TodoCounter'
import { TodoContext } from '../TodoContext'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'
import { CreateTodoButton } from '../CreateTodoButton'

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Ocurrió un error</p>}
                {loading && <p>Estamos cargando</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal} openModal={openModal}
            />
        </>
    )
}

export { AppUI }