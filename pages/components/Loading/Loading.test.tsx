import { render } from '@testing-library/react';
import { Loading } from './Loading';

it('should render as expected', () => {
  expect(render(<Loading />)).toMatchSnapshot();
});
