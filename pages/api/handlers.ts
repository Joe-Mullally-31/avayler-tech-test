import { rest } from 'msw';
import { pastLaunches } from './data/pastLaunches';
import { upcomingLaunches } from './data/upcomingLaunches';

const isTest = process.env.NODE_ENV === 'test';
const duration = isTest ? 0 : 2000;

const statusCode = 200;

export const handlers = [
  rest.get('https://api.spacexdata.com/v5/launches/past', (req, res, ctx) =>
    res(ctx.delay(), ctx.status(statusCode), ctx.json(pastLaunches))
  ),
  rest.get('https://api.spacexdata.com/v5/launches/upcoming', (req, res, ctx) =>
    res(ctx.delay(), ctx.status(statusCode), ctx.json(upcomingLaunches))
  ),
];
