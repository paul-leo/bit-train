import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrainSearch } from './train-search.composition.js';

it('should render the correct text', () => {
  const { getByTestId } = render(<BasicTrainSearch />);
  const rendered = getByTestId('train-search');
  expect(rendered).toBeFalsy();
});
