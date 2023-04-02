import React, { useState } from "react";
import ItemsForm from "./ItemsForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Items = ({ todos, completeTodo, removeTodo, updateTodo, priority1 }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return (
      <ItemsForm
        priority1={priority1}
        Priority={todos.Priority}
        edit={edit}
        onSubmit={submitUpdate}
      />
    );
  }

  //   console.log("a - priority is" + )

  return (
    <div className={!edit.id ? "nothing" : "d-n"}>
      {todos
        .sort((a, b) => a.Priority - b.Priority)
        .map((todo, index) => {
          return (
            <div
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              key={index}
            >
              <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
              </div>
              <div className="icons">
                <RiCloseCircleLine
                  onClick={() => removeTodo(todo.id)}
                  className="delete-icon"
                />
                <TiEdit
                  onClick={() => setEdit({ id: todo.id, value: todo.text })}
                  className="edit-icon"
                />
              </div>
              {edit.id ? (
                <ItemsForm
                  Priority={todo.Priority}
                  edit={edit}
                  onSubmit={submitUpdate}
                />
              ) : undefined}
            </div>
          );
        })}
    </div>
  );
};

export default Items;
