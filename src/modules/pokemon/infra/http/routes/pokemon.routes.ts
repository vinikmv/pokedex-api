import { Router } from 'express';
import PokemonController from '../controllers/PokemonController';

const pokemonRouter = Router();

const pokemonController = new PokemonController();

export default pokemonRouter;
