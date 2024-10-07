import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrainList } from './train-list.composition.js';

it('should render the correct text', () => {
  const { getByTestId } = render(<BasicTrainList />);
  const rendered = getByTestId('train-list');
  expect(rendered).toBeTruthy();
});
