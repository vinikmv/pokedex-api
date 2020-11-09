import AppError from '@shared/infra/errors/AppError';
import FakePokemonRepository from '../IRepositories/fake/FakePokemonRepository';
import CreatePokemonService from './CreatePokemonService';

let fakePokemonRepository: FakePokemonRepository;
let createPokemon: CreatePokemonService;

describe('CreatePokemon', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    createPokemon = new CreatePokemonService(fakePokemonRepository);
  });

  test('Should be able to create a new pokemon ', async () => {
    const pokemon = await createPokemon.execute({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    expect(pokemon).toHaveProperty('id');
    expect(pokemon.id).toEqual('1');
  });

  test('Should call AppError if pokemon already exists ', async () => {
    await createPokemon.execute({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    const samePokemon = createPokemon.execute({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });
    await expect(samePokemon).rejects.toBeInstanceOf(AppError);
  });
});
