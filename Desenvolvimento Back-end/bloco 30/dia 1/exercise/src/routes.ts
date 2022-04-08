import { Router } from 'express';

import WorldCupsController from './controllers/worldCupsController';

const worldCupsController = new WorldCupsController();
const routes = Router();

const cupsId = '/cups/:year';

routes.get('/cups', worldCupsController.getCups);
routes.post('/cups', worldCupsController.create);
routes.put(cupsId, worldCupsController.updateCup);
routes.delete(cupsId, worldCupsController.deleteCup);
routes.get(cupsId, worldCupsController.getCup);

export default routes;