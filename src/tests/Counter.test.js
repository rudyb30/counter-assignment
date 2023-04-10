import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterMessage = screen.getByText(/count/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  // Click the increment button
  fireEvent.click(incrementButton);

  // Verify that the count value has increased by 1
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  // Click the decrement button
  fireEvent.click(decrementButton);

  // Verify that the count value has decreased by 1
  expect(countElement.textContent).toBe('-1');
});

export default Counter;
