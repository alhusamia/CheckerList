import { ADD, CHECK, DELETE, DELETE_ALL } from "../actions/actionsType";

const initialState = {
  todos: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newtodo = { title: action.payload, checked: false };
      const newitems = [newtodo, ...state.todos]
      localStorage.setItem("items",JSON.stringify(newitems))
      return {
        ...state,
        todos: newitems
      };
    case CHECK:
      const todo = action.payload;
      todo.checked = !todo.checked;
      return {
        ...state,
        todos: [...state.todos]
      };
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo !== action.payload)
      };
    case DELETE_ALL:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.checked === false)
      };
    default:
      return state;
  }
};
