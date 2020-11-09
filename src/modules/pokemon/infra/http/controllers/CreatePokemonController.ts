import CreatePokemonService from '@modules/pokemon/services/CreatePokemonService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class CreatePokemonController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id, name, type, abilities, moves } = request.body;

    const createPokemonService = container.resolve(CreatePokemonService);

    const pokemon = await createPokemonService.execute({
      id,
      name,
      type,
      abilities,
      moves,
    });

    return response.status(201).json(pokemon);
  }
}
