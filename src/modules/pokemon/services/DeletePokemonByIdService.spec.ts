import AppError from '@shared/infra/errors/AppErros';
import FakePokemonRepository from '../IRepositories/fake/FakePokemonRepository';
import DeletePokemonByIdService from './DeletePokemonByIdService';

let fakePokemonRepository: FakePokemonRepository;
let deletePokemon: DeletePokemonByIdService;

describe('DeletePokemon', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    deletePokemon = new DeletePokemonByIdService(fakePokemonRepository);
  });

  test('Should be able to delete a pokemon ', async () => {
    const pokemon = await fakePokemonRepository.create({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    const deletedPokemon = await deletePokemon.execute({ id: pokemon.id });

    expect(deletedPokemon).toBeFalsy();
  });

  test('Should call AppError if pokemon doesnt exist ', async () => {
    const deletedPokemon = deletePokemon.execute({ id: '1' });
    await expect(deletedPokemon).rejects.toBeInstanceOf(AppError);
  });
});
