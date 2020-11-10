import { container } from 'tsyringe';
import ValidationProvider from './validation/implementation/ValidationProvider';
import IValidationProvider from './validation/models/IValidationProvider';

container.registerSingleton<IValidationProvider>(
  'ValidateFieldProvider',
  ValidationProvider,
);
