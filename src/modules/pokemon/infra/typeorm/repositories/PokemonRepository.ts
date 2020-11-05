import IPokemonRepository from '@modules/pokemon/IRepositories/IPokemonRepository';
import { getRepository, Repository } from 'typeorm';
import Pokemon from '../entities/Pokemon';

export default class PokemonRepository implements IPokemonRepository {
  private ormRepository: Repository<Pokemon>;

  constructor() {
    this.ormRepository = getRepository(Pokemon);
  }
}
