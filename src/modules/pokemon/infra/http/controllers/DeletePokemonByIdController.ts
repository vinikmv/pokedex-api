import DeletePokemonByIdService from '@modules/pokemon/services/DeletePokemonByIdService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class DeletePokemonByIdController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePokemonByIdService = container.resolve(
      DeletePokemonByIdService,
    );

    await deletePokemonByIdService.execute({ id });

    return response.status(204).json();
  }
}
