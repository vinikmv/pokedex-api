import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Pokemon from '../infra/typeorm/entities/Pokemon';
import IPokemonRepository from '../IRepositories/IPokemonRepository';

interface abilityObject {
  ability: string;
}

interface moveObject {
  move: string;
}
interface IRequestPokemon {
  id: string;
  name: string;
  type: string;
  abilities: string[];
  moves: string[];
}

@injectable()
class CreatePokemonService {
  constructor(
    @inject('PokemonRepository') private pokemonRepository: IPokemonRepository,
  ) {}

  public async execute({
    id,
    name,
    type,
    abilities,
    moves,
  }: IRequestPokemon): Promise<Pokemon> {
    const pokemonAlreadyExist = await this.pokemonRepository.findById(id);

    if (pokemonAlreadyExist) {
      throw new AppError('Pokémon já cadastrado');
    }

    const pokemon = await this.pokemonRepository.create({
      id,
      name,
      type,
      abilities,
      moves,
    });

    return pokemon;
  }
}

export default CreatePokemonService;
