import { Router } from 'express';
import CreatePokemonController from '../controllers/CreatePokemonController';
import ListAllPokemonController from '../controllers/ListAllPokemonController';
import ListPokemonByIdController from '../controllers/ListPokemonByIdController';
import UpdatePokemonByIdController from '../controllers/UpdatePokemonByIdController';
import DeletePokemonByIdController from '../controllers/DeletePokemonByIdController';

const pokemonRouter = Router();

const createPokemonController = new CreatePokemonController();
const listAllPokemonController = new ListAllPokemonController();
const listPokemonByIdController = new ListPokemonByIdController();
const updatePokemonByIdController = new UpdatePokemonByIdController();
const deletePokemonByIdController = new DeletePokemonByIdController();

pokemonRouter.post('/', createPokemonController.create);
pokemonRouter.get('/', listAllPokemonController.create);
pokemonRouter.get('/:id', listPokemonByIdController.create);
pokemonRouter.put('/:id', updatePokemonByIdController.update);
pokemonRouter.delete('/:id', deletePokemonByIdController.create);

export default pokemonRouter;
