import React from 'react'
import { withStorageListener } from './withStorageListener'
import './ChangeAlert.css'


function ChangeAlert({ show, toggleShow}) {
    if (show) {
        return (
            // <div>
            //     <p>Hubo cambios</p>
            //     <button onClick={() => toggleShow(false)}>Volver a cargar la informacion</button>
            // </div>

            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={() => toggleShow(false)}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }