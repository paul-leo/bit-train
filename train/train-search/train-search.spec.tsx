import React from 'react';
import { render } from '@testing-library/react';
import { BasicTrainSearch } from './train-search.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicTrainSearch />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
