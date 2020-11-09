import UpdatePokemonByIdService from '@modules/pokemon/services/UpdatePokemonByIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UpdatePokemonByIdController {
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, type, abilities, moves } = request.body;

    const updatePokemonByIdService = container.resolve(
      UpdatePokemonByIdService,
    );

    const pokemon = await updatePokemonByIdService.execute({
      id,
      name,
      type,
      abilities,
      moves,
    });

    return response.json(pokemon);
  }
}
