import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it('should add new item', () => {
  const { queryByText, getByLabelText } = render(<TodoList />);
  expect(queryByText('Mark as Completed')).not.toBeInTheDocument();
  const input = getByLabelText('Name of Task');
  const btn = queryByText('Add Task');
  fireEvent.change(input, { target: { value: 'Test Input' } });
  fireEvent.click(btn);
  expect(queryByText('Mark as Completed')).toBeInTheDocument();
  expect(queryByText('Test Input')).toBeInTheDocument();
  const removeBtn = queryByText('Remove');
  fireEvent.click(removeBtn);
  expect(queryByText('Mark as Completed')).not.toBeInTheDocument();
  expect(queryByText('Test Input')).not.toBeInTheDocument();
});