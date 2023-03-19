import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

it('should render as expected', () => {
  expect(render(<ErrorMessage />)).toMatchSnapshot();
});
