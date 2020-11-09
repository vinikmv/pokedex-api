import ListPokemonByIdService from '@modules/pokemon/services/ListPokemonByIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ListPokemonByIdController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listPokemonByIdService = container.resolve(ListPokemonByIdService);

    const pokemon = await listPokemonByIdService.execute({ id });

    return response.json(pokemon);
  }
}
