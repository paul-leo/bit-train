import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrainList } from './train-list.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicTrainList />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
