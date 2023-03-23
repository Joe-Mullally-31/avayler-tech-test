import * as Tabs from '@radix-ui/react-tabs';
import { PastLaunchesTab } from '../PastLaunchesTab/PastLaunchesTab';
import styles from '../../../styles/LaunchInfoTabs.module.css';
import { UpcomingLaunchesTab } from '../UpcomingLaunchesTab';

export const LaunchInfoTabs = () => {
  return (
    <div className="w-full">
      <h1 className="align-left">Launches</h1>
      <Tabs.Root defaultValue="pastLaunches" className="flow">
        <Tabs.List className={styles.tabsList} aria-label="Filter your transactions">
          <Tabs.Trigger value="pastLaunches">Past</Tabs.Trigger>
          <Tabs.Trigger value="upcomingLaunches">Upcoming</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="pastLaunches">
          <PastLaunchesTab />
        </Tabs.Content>
        <Tabs.Content value="upcomingLaunches">
          <UpcomingLaunchesTab />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};
