import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Pokemon from '../infra/typeorm/entities/Pokemon';
import IPokemonRepository from '../IRepositories/IPokemonRepository';

interface IRequest {
  id: string;
}

@injectable()
class ListPokemonByIdService {
  constructor(
    @inject('PokemonRepository') private pokemonRepository: IPokemonRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Pokemon | undefined> {
    const pokemon = await this.pokemonRepository.findById(id);

    if (!pokemon) {
      throw new AppError('O pokémon não existe.');
    }
    return pokemon;
  }
}

export default ListPokemonByIdService;
