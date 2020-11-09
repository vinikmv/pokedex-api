import { Router } from 'express';
import pokemonRouter from '@modules/pokemon/infra/http/routes/pokemon.routes';

const routes = Router();

routes.use('/pokemon', pokemonRouter);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello' });
});

export default routes;
