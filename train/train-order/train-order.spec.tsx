import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrainOrder } from './train-order.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicTrainOrder />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
