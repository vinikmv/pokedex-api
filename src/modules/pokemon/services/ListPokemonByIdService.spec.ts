import AppError from '@shared/infra/errors/AppErros';
import FakePokemonRepository from '../IRepositories/fake/FakePokemonRepository';
import DeletePokemonByIdService from './DeletePokemonByIdService';
import ListPokemonByIdService from './ListPokemonByIdService';

let fakePokemonRepository: FakePokemonRepository;
let listPokemonById: ListPokemonByIdService;

describe('ListPokemon', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    listPokemonById = new ListPokemonByIdService(fakePokemonRepository);
  });

  test('Should be able to list a pokemon ', async () => {
    const newPokemon = await fakePokemonRepository.create({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    const listPokemon = await listPokemonById.execute({ id: newPokemon.id });

    expect(listPokemon).toEqual({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });
  });

  test('Should call AppError if pokemon doesnt exist ', async () => {
    const pokemon = listPokemonById.execute({ id: '1' });
    await expect(pokemon).rejects.toBeInstanceOf(AppError);
  });
});
