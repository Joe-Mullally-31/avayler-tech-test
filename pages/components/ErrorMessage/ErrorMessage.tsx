import styles from '../../../styles/ErrorMessage.module.css';

export const ErrorMessage = () => (
  <div className={styles.errorMessageContainer} role="alert" aria-label="Error loading launch information.">
    <h2>There was an error loading SpaceX information!</h2>
    <p>
      Please check your internet connection and try again later. Alternatively{' '}
      <a className={styles.supportLink} href="mailto: support@mail.co">
        contact support
      </a>
      .
    </p>
  </div>
);
