import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';

const TodoList = () => {
  const INITIAL_STATE = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos((todo) => [
      ...todos,
      { ...newTodo, id: uuid(), isComplete: false },
    ]);
  };
  const remove = (t) => {
    setTodos(todos.filter((todo) => todo !== t));
  };
  const editTodo = (changes, idx, id, isComplete) => {
    setTodos((todos) =>
      todos.map((todo, i) => {
        return i === idx
          ? { ...changes, id: id, isComplete: isComplete }
          : todo;
      })
    );
  };
  const handleCheck = (t, idx) =>
    setTodos((todos) =>
      todos.map((todo, i) =>
        i === idx ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  localStorage.setItem('todos', JSON.stringify(todos));
  return (
    <div>
      <h1>Todo List</h1>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo, idx) => (
          <Todo
            name={todo.name}
            remove={(evt) => remove(todo)}
            key={todo.id}
            id={todo.id}
            addTodo={addTodo}
            editTodo={editTodo}
            idx={idx}
            handleCheck={(evt) => handleCheck(todo, idx)}
            isComplete={todo.isComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;