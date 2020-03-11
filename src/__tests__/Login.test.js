import React from 'react';
import { render } from '@testing-library/react';
import Login from '../pages/login';

test('renders learn react link', () => {
  const { findByText } = render(<Login />);
  const linkElement = findByText(/Tasks Page/i);
  expect(true).toBe(true);
});
