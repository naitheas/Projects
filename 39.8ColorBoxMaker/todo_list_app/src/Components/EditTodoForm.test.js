import React from 'react';
import { render } from '@testing-library/react';
import EditTodoForm from './EditTodoForm';

it('renders without crashing', () => {
  render(<EditTodoForm />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<EditTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});