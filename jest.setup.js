import '@testing-library/jest-dom/extend-expect';

import { setupServer } from 'msw/node';
import { handlers } from './pages/api/handlers';

// setup MSW
export const server = setupServer(...handlers);
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
