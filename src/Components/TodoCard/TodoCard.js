import React from "react";
import EditTodo from "../EditTodo/EditTodo";
import "./todocard.css";

const TodoCard = ({ todo }) => {
  return (
    <li className="todo-card">
      <span className="todo-text">{todo.text}</span>
      <i className="fas fa-trash-alt"></i>
      <EditTodo todo={todo} />
    </li>
  );
};

export default TodoCard;
