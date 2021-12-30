import './CreateTodoButton.css'

function CreateTodoButton() {
    const onClickButton = () => {
        alert('Aqui deberian abrir el modal')
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
            </button>
    )
}

export { CreateTodoButton }