import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { LaunchInfoTabs } from './components/LaunchInfoTabs/LaunchInfoTabs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX Launch Information</title>
        <meta name="description" content="Made by Joe Mullally for Avayler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SpaceX Launch Information</h1>
        <LaunchInfoTabs />
      </main>

      <footer className={styles.footer}>Created by Joe Mullally</footer>
    </div>
  );
}
