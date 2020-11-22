import React from 'react';
import { render, screen } from '@testing-library/react';
import MiniEcommerce from './mini-ecommerce';

test('renders learn react link', () => {
  render(<MiniEcommerce />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
