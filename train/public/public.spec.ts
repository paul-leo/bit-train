import { public } from './public.js';

it('renders with the correct text', () => {
  expect(public()).toEqual('hello world');
});
