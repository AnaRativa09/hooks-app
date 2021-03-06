import React from 'react'

export const ToDoListItem = ({ toDo, index, handleDelete, handleToggle }) => {
  return (
    <li key={toDo.id} className="list-group-item">
      <p
        className={toDo.done && 'complete'}
        onClick={() => handleToggle(toDo.id)}
      >
        {index + 1}. {toDo.description}
      </p>

      <button
        className="btn btn-danger"
        onClick={() => handleDelete(toDo.id)}
      >
        Eliminar
      </button>
    </li>
  )
}
