import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  return (
    <div className="container">
      <h4 className="my-3">Todos List</h4>
      {props.todos.length === 0 ? (
        <h6>No work to do, Hurray!!!</h6>
      ) : (
        props.todos.map((todo) => {
          return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
        })
      )}
    </div>
  );
}