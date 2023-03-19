import { useEffect, useState } from 'react';
import { Launch } from '../../types';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { LaunchRow } from './LaunchRow/LaunchRow';
import { Loading } from './Loading/Loading';
import useSWR from 'swr';

export const UpcomingLaunchesTab = () => {
  const {
    data: upcomingLaunches,
    error,
    isLoading,
  } = useSWR<Launch[]>('/api/upcoming-launches', () =>
    fetch('https://api.spacexdata.com/v5/launches/upcoming', { method: 'GET' }).then((res) => res.json())
  );
  console.log(upcomingLaunches);

  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {!isLoading && !error && (
        <table aria-label="Past Launches">
          <thead>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {upcomingLaunches?.map((upcomingLaunch) => (
              <LaunchRow launch={upcomingLaunch} key={upcomingLaunch.id} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
