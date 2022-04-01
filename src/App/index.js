import React from 'react'
// import './App.css';
import { useTodos } from './useTodos'
import { TodoHeader } from '../TodoHeader'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { TodoForm } from '../TodoForm'
import { Modal } from '../Modal'
import { ChangeAlertWithStorageListener } from '../ChangeAlert'
import { CreateTodoButton } from '../CreateTodoButton'


// const defaultTodos = [
//   { text: 'cortar cebolla', completed: true },
//   { text: 'Completar curso', completed: false },
//   { text: 'LLorar con la llorona', completed: false }
// ]
function App() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        sincronizeTodos
    } = useTodos()

    return (
        <>
            <TodoHeader>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                    loading={loading}

                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    loading={loading}

                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchedTodos={searchedTodos}
                totalTodos={totalTodos}
                searchValue={searchValue}
                onError={() => <p>Ocurrió un error</p>}
                onLoading={() => <p>Estamos cargando</p>}
                onEmptyTodo={() => <p>No hay todos</p>}
                onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p>}
                render={todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            />

            {/* <TodoList>
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
      </TodoList> */}

            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
            <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
        </>
    )
}

export default App;
