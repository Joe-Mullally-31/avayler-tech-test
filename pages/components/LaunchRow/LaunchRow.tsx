import { Launch } from '../../../types';
import { Avatar } from '../Avatar';
import styles from '../../styles/LaunchRow.module.css';

type Props = {
  launch: Launch;
};

export const LaunchRow = ({ launch }: Props) => {
  const {
    id,
    name,
    date_utc,
    cores,
    success,
    failures,
    links: {
      patch: { small },
    },
  } = launch;

  const status = () => {
    switch (success) {
      case null:
        return 'N/A';
      case true:
        return 'Success';
      case false:
        return 'Failure';
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.transactionDetail}>
          <Avatar image={small} />
          <div className="transaction-description">
            {name}
            <div className={styles.transactionCategory}>id: {id}</div>
            <div className={styles.transactionCategory}>coreId: {cores[0].core}</div>
          </div>
        </div>
      </td>
      <td>
        <div>
          {new Date(date_utc).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </td>
      <td>
        <div>{status()}</div>
        {failures.length !== 0 &&
          failures.map((failure, index) => (
            <div className={styles.failureDescription} key={`${failure.reason}-${index}`}>
              <div>Time: {failure.time}</div>
              <div>Altitude: {failure.altitude}</div>
              <div>Reason: {failure.reason}</div>
            </div>
          ))}
      </td>
    </tr>
  );
};
