export default interface ICreatePokemonDTO {
  id: string;
  name: string;
  type: string;
  abilities: Array<string>;
  moves: Array<string>;
}
