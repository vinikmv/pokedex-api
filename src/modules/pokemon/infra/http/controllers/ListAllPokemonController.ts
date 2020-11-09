import ListAllPokemonService from '@modules/pokemon/services/ListAllPokemonService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class ListAllPokemonController {
  public async create(request: Request, response: Response): Promise<Response> {
    const listAllPokemonService = container.resolve(ListAllPokemonService);

    const listOfPokemon = await listAllPokemonService.execute();

    return response.json(listOfPokemon);
  }
}
