import AppError from '@shared/infra/errors/AppErros';
import FakePokemonRepository from '../IRepositories/fake/FakePokemonRepository';
import UpdatePokemonByIdService from './UpdatePokemonByIdService';

let fakePokemonRepository: FakePokemonRepository;
let updatePokemon: UpdatePokemonByIdService;

describe('DeletePokemon', () => {
  beforeEach(() => {
    fakePokemonRepository = new FakePokemonRepository();
    updatePokemon = new UpdatePokemonByIdService(fakePokemonRepository);
  });

  test('Should be able to update a pokemon ', async () => {
    await fakePokemonRepository.create({
      id: '1',
      name: 'PokemonTest',
      type: 'normal',
      abilities: ['a1', 'a2', 'a3'],
      moves: ['m1', 'm2'],
    });

    const updatedPokemon = await updatePokemon.execute({
      id: '1',
      name: 'PokemonTest2',
      type: 'fire',
      abilities: ['b1', 'b2', 'b3'],
      moves: ['n1', 'n2'],
    });

    expect(updatedPokemon).toEqual({
      id: '1',
      name: 'PokemonTest2',
      type: 'fire',
      abilities: ['b1', 'b2', 'b3'],
      moves: ['n1', 'n2'],
    });
  });

  test('Should call AppError if pokemon doesnt exist ', async () => {
    const deletedPokemon = updatePokemon.execute({
      id: '1',
      name: 'PokemonTest2',
      type: 'fire',
      abilities: ['b1', 'b2', 'b3'],
      moves: ['n1', 'n2'],
    });

    await expect(deletedPokemon).rejects.toBeInstanceOf(AppError);
  });
});
