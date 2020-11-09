import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Pokemon from '../infra/typeorm/entities/Pokemon';
import IPokemonRepository from '../IRepositories/IPokemonRepository';

interface IRequest {
  id: string;
  name: string;
  type: string;
  abilities: string[];
  moves: string[];
}

@injectable()
class UpdatePokemonByIdService {
  constructor(
    @inject('PokemonRepository') private pokemonRepository: IPokemonRepository,
  ) {}

  public async execute({
    id,
    name,
    type,
    abilities,
    moves,
  }: IRequest): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.findById(id);

    if (!pokemon) {
      throw new AppError('O pokemon não existe.');
    }

    pokemon.name = name;
    pokemon.type = type;
    pokemon.abilities = abilities;
    pokemon.moves = moves;

    return this.pokemonRepository.updatePokemon(pokemon);
  }
}

export default UpdatePokemonByIdService;
