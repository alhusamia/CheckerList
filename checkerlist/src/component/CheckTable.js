import React from "react";
import CheckRow from "./CheckRow";

export default function CheckTable({ todos }) {
  const todoRow = todos.map(todo => <CheckRow key={todo.title} todo={todo} />);

  return (
    <div className="mt-3 table">
      <div className="Main">{todoRow}</div>
    </div>
  );
}
