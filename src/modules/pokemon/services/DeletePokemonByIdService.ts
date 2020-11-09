import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IPokemonRepository from '../IRepositories/IPokemonRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeletePokemonByIdService {
  constructor(
    @inject('PokemonRepository') private pokemonRepository: IPokemonRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const pokemon = await this.pokemonRepository.findById(id);
    if (!pokemon) {
      throw new AppError('O pokemon não existe.');
    }
    await this.pokemonRepository.deletePokemon(pokemon);
  }
}

export default DeletePokemonByIdService;
