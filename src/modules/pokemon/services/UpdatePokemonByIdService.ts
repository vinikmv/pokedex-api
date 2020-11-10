import AppError from '@shared/infra/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Pokemon from '../infra/typeorm/entities/Pokemon';
import IPokemonRepository from '../IRepositories/IPokemonRepository';
import IValidationProvider from '../providers/validation/models/IValidationProvider';

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
    @inject('ValidateFieldProvider')
    private validateProvider: IValidationProvider,
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

    const fieldArray = [id, name, type];
    const field2Array = [abilities, moves];

    fieldArray.forEach(this.validateProvider.validateString);
    field2Array.forEach(this.validateProvider.validateArray);

    pokemon.name = name;
    pokemon.type = type;
    pokemon.abilities = abilities;
    pokemon.moves = moves;

    return this.pokemonRepository.updatePokemon(pokemon);
  }
}

export default UpdatePokemonByIdService;
