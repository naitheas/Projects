import React, { useState } from 'react';

const EditTodoForm = ({
  editTodo,
  todoName,
  toggleEdit,
  idx,
  id,
  isComplete,
}) => {
  const INITIAL_STATE = { name: todoName };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { name } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo({ ...formData }, idx, id, isComplete);
    toggleEdit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name of Task</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name of Task"
        value={name}
        onChange={handleChange}
      />
      <button>Make Changes</button>
    </form>
  );
};

export default EditTodoForm;