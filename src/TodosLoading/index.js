import React from "react";
import "./TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon"></span>
      <span className="LoadingTodo-text"></span>
      <p className="LoadingTodo-deleteIcon"></p>
    </div>
  );
}

export { TodosLoading };
