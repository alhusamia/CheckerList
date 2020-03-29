import { ADD, DELETE, DELETE_ALL, CHECK } from "./actionsType";

export const add = todo => {
  return {
    type: ADD,
    payload: todo
  };
};
export const delet = todo => {
  const filtered = JSON.parse(localStorage.getItem("items")).filter(
    item => item.title !== todo.title
  );
  console.log(filtered);
  localStorage.setItem("items", JSON.stringify(filtered));

  return {
    type: DELETE,
    payload: todo
  };
};
export const delete_all = () => {
  const filtered = JSON.parse(localStorage.getItem("items")).filter(
    item => item.checked !== true
  );
  console.log(filtered);
  localStorage.setItem("items", JSON.stringify(filtered));
  return {
    type: DELETE_ALL
  };
};
export const check = todo => {
  const filter = JSON.parse(localStorage.getItem("items"));
  const filtered = [];

  for (let i = 0; i < filter.length; i++) {
    if (filter[i].title === todo.title) {
      filter[i].checked = true;
      filtered.push(filter[i]);
    } else {
      filtered.push(filter[i]);
    }
  }

  localStorage.setItem("items", JSON.stringify(filtered));
  return {
    type: CHECK,
    payload: todo
  };
};
