import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Launch } from '../../../types';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { LaunchRow } from '../LaunchRow/LaunchRow';
import { Loading } from '../Loading/Loading';
import useSWR from 'swr';
import { Pagination } from '@mui/material';
import styles from '../../../styles/PastLaunchesTab.module.css';

const LAUNCHES_PER_PAGE = 10;
type Payload = { id: string; type: string };

export const PastLaunchesTab = () => {
  const {
    data: pastLaunches,
    error,
    isLoading,
  } = useSWR<Launch[]>('/api/past-launches', () =>
    fetch('https://api.spacexdata.com/v5/launches/past', { method: 'GET' }).then((res) => res.json())
  );

  const uniquePayloadIds = useMemo(() => {
    const payloadIds: string[] = [];
    pastLaunches?.map((launch) => payloadIds.push(...launch.payloads));
    return Array.from(new Set(payloadIds));
  }, [pastLaunches]);

  const {
    data: payloads,
    error: payloadsError,
    isLoading: payloadsLoading,
  } = useSWR<Payload[]>('/api/payloads', () =>
    fetch('https://api.spacexdata.com/v4/payloads', {
      method: 'GET',
    }).then((res) => res.json())
  );

  const payloadIdToTypeMap = useMemo(() => {
    return new Map(payloads?.map((payload) => [payload.id, payload.type]));
  }, [payloads]);

  console.log(payloads);

  const [page, setPage] = useState(1);
  const [pastLaunchesToShow, setPastLaunchesToShow] = useState<Launch[]>();

  useEffect(() => {
    setPastLaunchesToShow(
      [...(pastLaunches ?? [])].reverse().slice((page - 1) * LAUNCHES_PER_PAGE, page * LAUNCHES_PER_PAGE)
    );
  }, [pastLaunches]);

  const handleChangePage = useCallback(
    (_event: ChangeEvent<unknown>, page: number) => {
      setPastLaunchesToShow([...(pastLaunches ?? [])].slice((page - 1) * LAUNCHES_PER_PAGE, page * LAUNCHES_PER_PAGE));
      setPage(page);
      console.log(pastLaunchesToShow);
    },
    [pastLaunches, page, setPage, setPastLaunchesToShow]
  );

  return (
    <div className="flex-col">
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {pastLaunches && (
        <>
          <table aria-label="Past Launches">
            <thead>
              <tr>
                <th>Description</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {pastLaunchesToShow?.map((pastLaunch) => (
                <LaunchRow launch={pastLaunch} payloadIdToTypeMap={payloadIdToTypeMap} key={pastLaunch.id} />
              ))}
            </tbody>
          </table>
          <div className={styles.paginationBar}>
            <Pagination
              count={Math.ceil(pastLaunches.length / LAUNCHES_PER_PAGE)}
              page={page}
              onChange={handleChangePage}
              showFirstButton
              showLastButton
              color="primary"
            />
          </div>
        </>
      )}
    </div>
  );
};
