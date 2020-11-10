export default interface IValidationProvider {
  validateString(input: string): void;
  validateArray(input: string[]): void;
}
