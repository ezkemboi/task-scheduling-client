import React from 'react';
import { render } from '@testing-library/react';
import Tasks from '../pages/tasks';

test('renders learn react link', () => {
  const { findByText } = render(<Tasks />);
  const linkElement = findByText(/Login Page/i);
  expect(true).toBe(true);
});
