import { inject, injectable } from 'tsyringe';
import Pokemon from '../infra/typeorm/entities/Pokemon';
import IPokemonRepository from '../IRepositories/IPokemonRepository';

interface IRequestPokemon {
  id: string;
  name: string;
  type: string;
}

@injectable()
class ListAllPokemonService {
  constructor(
    @inject('PokemonRepository') private pokemonRepository: IPokemonRepository,
  ) {}

  public async execute(): Promise<Pokemon[]> {
    const listOfPokemons = await this.pokemonRepository.getAllPokemon();

    return listOfPokemons;
  }
}

export default ListAllPokemonService;
