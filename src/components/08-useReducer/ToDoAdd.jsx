import React from 'react';
import { useForm } from '../../hooks/useForm';

export const ToDoAdd = ({ handleAddToDo }) => {
  const [{ description }, handleInputChange, reset] = useForm({ description: ''});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1){
      return;
    };

    const newToDo = {
      id: new Date().getTime(),
      description,
      done: false,
    };

    handleAddToDo(newToDo);
    reset();
  }

  return (
    <>
      <h4>Agregar</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-outline-primary mt-1 w-100"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  )
}
