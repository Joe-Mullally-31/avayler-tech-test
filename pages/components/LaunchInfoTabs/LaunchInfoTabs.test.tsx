import { render, screen } from '@testing-library/react';
import { LaunchInfoTabs } from './LaunchInfoTabs';
import userEvent from '@testing-library/user-event';

describe('LaunchInfoTabs', () => {
  it('should default to Past tab', () => {
    render(<LaunchInfoTabs />);

    expect(screen.getByText('Launches')).toBeInTheDocument();

    const pastLaunchesTab = screen.getByRole('tab', {
      name: 'Past',
    });

    expect(pastLaunchesTab).toHaveAttribute('data-state', 'active');
  });

  it('should handle switching to Launch tab', () => {
    const user = userEvent.setup();

    render(<LaunchInfoTabs />);
    const pastLaunchesTab = screen.getByRole('tab', {
      name: 'Past',
    });
    const upcomingLaunchesTab = screen.getByRole('tab', {
      name: 'Upcoming',
    });

    user.click(pastLaunchesTab);

    expect(pastLaunchesTab).toHaveAttribute('data-state', 'active');

    expect(upcomingLaunchesTab).toHaveAttribute('data-state', 'inactive');
  });
});
