import React, { useState } from 'react';
import EditTodoForm from './EditTodoForm';

const Todo = ({ name, remove, editTodo, idx, id, handleCheck, isComplete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };
  const classes = isComplete ? 'Todo-complete' : 'Todo-incomplete';
  return (
    <div className="Todo">
      {!isEdit && (
        <div>
          <span className={classes}>{name}</span>

          <button className="Todo-btn" onClick={toggleEdit}>
            Edit
          </button>
          <button className="Todo-btn" onClick={handleCheck}>
            Mark as Completed
          </button>
          <button className="Todo-btn" onClick={remove}>
            Remove
          </button>
        </div>
      )}
      {isEdit && (
        <EditTodoForm
          toggleEdit={toggleEdit}
          editTodo={editTodo}
          todoName={name}
          id={id}
          idx={idx}
          isComplete={isComplete}
        />
      )}
    </div>
  );
};

export default Todo;