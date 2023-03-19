import { setupWorker } from 'msw';
import { AppProps } from 'next/app';
import '../styles/globals.css';

import { handlers } from './api/handlers';

const worker = setupWorker(...handlers);

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
