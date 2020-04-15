import { Router } from 'express';

import transactionsRouter from './transactions.routes';
import categoriestransactionsRouter from './categories.routes';

const routes = Router();

routes.use('/categories', categoriestransactionsRouter);
routes.use('/transactions', transactionsRouter);

export default routes;
