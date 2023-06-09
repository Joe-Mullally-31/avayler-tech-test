import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { PastLaunchesTab } from './PastLaunchesTab';

describe('LaunchInfoTabs', () => {
  it.skip('should show loading state', () => {
    const user = userEvent.setup();

    render(<PastLaunchesTab />);

    expect(screen.getByRole('status', { name: 'Transaction data loading' })).toBeInTheDocument();
  });

  it('should show error state', () => {
    const user = userEvent.setup();

    render(<PastLaunchesTab />);

    expect(screen.getByRole('alert', { name: 'Error loading launch information.' })).toBeInTheDocument();
  });

  it.skip('should show past lunches table', () => {
    const user = userEvent.setup();

    render(<PastLaunchesTab />);

    expect(screen.queryByText('FalconSat')).toBeInTheDocument();
  });
});
