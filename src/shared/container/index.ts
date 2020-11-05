import { container } from 'tsyringe';

import IPokemonRepository from '@modules/pokemon/IRepositories/IPokemonRepository';
import PokemonRepository from '@modules/pokemon/infra/typeorm/repositories/PokemonRepository';

container.registerSingleton<IPokemonRepository>(
  'PokemonRepository',
  PokemonRepository,
);
