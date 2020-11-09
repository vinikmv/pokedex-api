import ICreatePokemonDTO from '../dtos/ICreatePokemonDTO';
import Pokemon from '../infra/typeorm/entities/Pokemon';

export default interface IPokemonRepository {
  create(pokemonData: ICreatePokemonDTO): Promise<Pokemon>;
  findById(id: string): Promise<Pokemon | undefined>;
  getAllPokemon(): Promise<Pokemon[]>;
  updatePokemon(pokemonData: Pokemon): Promise<Pokemon>;
  deletePokemon(pokemonData: Pokemon): Promise<void>;
}
