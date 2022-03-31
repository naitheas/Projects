import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { name: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const { name } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITIAL_STATE);
  };
  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Name of Task</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name of Task"
        value={name}
        onChange={handleChange}
      />
      <button>Add Task</button>
    </form>
  );
};

export default NewTodoForm;