import ICreatePokemonDTO from '@modules/pokemon/dtos/ICreatePokemonDTO';
import Pokemon from '@modules/pokemon/infra/typeorm/entities/Pokemon';
import IPokemonRepository from '@modules/pokemon/IRepositories/IPokemonRepository';

export default class FakePokemonRepository implements IPokemonRepository {
  pokemons: Pokemon[] = [];

  async create(pokemonData: ICreatePokemonDTO): Promise<Pokemon> {
    const pokemon = new Pokemon();
    Object.assign(pokemon, pokemonData);
    this.pokemons.push(pokemon);

    return pokemon;
  }

  async findById(id: string): Promise<Pokemon | undefined> {
    const findPokemon = this.pokemons.find(pokemon => pokemon.id === id);
    return findPokemon;
  }

  async getAllPokemon(): Promise<Pokemon[]> {
    return this.pokemons;
  }

  async updatePokemon(pokemonData: Pokemon): Promise<Pokemon> {
    const pokemonToUpdate = this.pokemons.findIndex(
      pokemon => pokemon.id === pokemonData.id,
    );
    this.pokemons[pokemonToUpdate] = pokemonData;

    return this.pokemons[pokemonToUpdate];
  }

  async deletePokemon(pokemonData: Pokemon): Promise<void> {
    this.pokemons.filter(pokemon => pokemon !== pokemonData);
  }
}
