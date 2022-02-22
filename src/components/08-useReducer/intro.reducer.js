const initialState = [{
  id: 1,
  toDo: 'comprar pan',
  done: false,
}];

const toDoReducer = ( state=initialState, action ) => {
  // no puede hacer procesos asíncronos, devuelve un nuevo estado

  if (action?.type === 'add'){
    return [...state, action.payload]
  }

  return state;
};

let toDos = toDoReducer();

const newToDo = [{
  id: 2,
  toDo: 'comprar leche',
  done: false,
}];

const addToDoAction = {
  type: 'add',
  payload: newToDo,
};

toDos = toDoReducer(toDos, addToDoAction);

console.log('Hola mundo', toDos);