import AppError from '@shared/infra/errors/AppError';
import FakePokemonRepository from '../IRepositories/fake/FakePokemonRepository';
import FakeValidationProvider from '../providers/validation/fake/FakeValidationProvider';
import CreatePokemonService from './CreatePokemonService';

let fakePokemonRepository: FakePokemonRepository;
let fakeValidationProvider: FakeValidationProvider;
let createPokemon: CreatePokemonService;

describe('CreatePokemon', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    fakeValidationProvider = new FakeValidationProvider();
    createPokemon = new CreatePokemonService(
      fakePokemonRepository,
      fakeValidationProvider,
    );
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

  test('Should call AppError if empty field is provided ', async () => {
    const invalidPokemon = createPokemon.execute({
      id: '',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['', 'a2', 'a3'],
      moves: ['m1', ''],
    });
    await expect(invalidPokemon).rejects.toBeInstanceOf(AppError);
  });
});
