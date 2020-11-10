import AppError from '@shared/infra/errors/AppError';
import IValidationProvider from '../models/IValidationProvider';

export default class FakeValidationProvider implements IValidationProvider {
  validateString(input: string): void {
    if (!input || input.trim().length === 0) {
      throw new AppError('Campo vazio. Preencha novamente.');
    }
  }

  validateArray(input: string[]): void {
    if (input === undefined || input.length === 0) {
      throw new AppError(
        `O campo [abilities] ou [moves] está vazio. Preencha novamente`,
      );
    }
    for (let i = 0; i < input.length; i += 1) {
      if (input[i] === '') {
        throw new AppError(
          `O campo [abilities] ou [moves] possui um subcampo vazio. Remova ou preencha o subcampo vazio`,
        );
      }
    }
  }
}
