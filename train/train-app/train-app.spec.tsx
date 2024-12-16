import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrainApp } from './train-app.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicTrainApp />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
