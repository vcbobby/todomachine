import React from 'react'
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    
    return (
        <input disabled={loading} onChange={onSearchValueChange} value={searchValue} className="TodoSearch" placeholder="cebolla" />
    )
}

export { TodoSearch }