import ICreatePokemonDTO from '@modules/pokemon/dtos/ICreatePokemonDTO';
import IPokemonRepository from '@modules/pokemon/IRepositories/IPokemonRepository';
import { getRepository, Repository } from 'typeorm';
import Pokemon from '../entities/Pokemon';

export default class PokemonRepository implements IPokemonRepository {
  private ormRepository: Repository<Pokemon>;

  constructor() {
    this.ormRepository = getRepository(Pokemon);
  }

  async create(pokemonData: ICreatePokemonDTO): Promise<Pokemon> {
    const pokemon = this.ormRepository.create(pokemonData);
    await this.ormRepository.save(pokemon);
    return pokemon;
  }

  async findById(id: string): Promise<Pokemon | undefined> {
    const pokemon = await this.ormRepository.findOne(id);
    return pokemon;
  }

  async getAllPokemon(): Promise<Pokemon[]> {
    const pokemon = await this.ormRepository
      .createQueryBuilder('pokemon')
      .getMany();

    return pokemon;
  }

  async updatePokemon(pokemonData: Pokemon): Promise<Pokemon> {
    const updatedPokemon = await this.ormRepository.save(pokemonData);

    return updatedPokemon;
  }

  async deletePokemon(pokemonData: Pokemon): Promise<void> {
    await this.ormRepository.remove(pokemonData);
  }
}
