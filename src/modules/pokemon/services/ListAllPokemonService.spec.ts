import AppError from '@shared/infra/errors/AppErros';
import FakePokemonRepository from '../IRepositories/fake/FakePokemonRepository';
import ListAllPokemonService from './ListAllPokemonService';

let fakePokemonRepository: FakePokemonRepository;
let listPokemons: ListAllPokemonService;

describe('ListAllPokemon', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    listPokemons = new ListAllPokemonService(fakePokemonRepository);
  });

  test('Should be able to list all pokemons ', async () => {
    await fakePokemonRepository.create({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    await fakePokemonRepository.create({
      id: '2',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    const allPokemons = await listPokemons.execute();
    expect(allPokemons.length).toBe(2);
  });

  test('Should list an empty array if there is no pokemon registered on database ', async () => {
    const allPokemons = await listPokemons.execute();
    expect(allPokemons.length).toBe(0);
  });
});
