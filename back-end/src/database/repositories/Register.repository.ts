import { AppDataSource } from '../../data-source.ts';
import Register from '../entities/Register';

export const registerRepository = AppDataSource.getRepository(Register);
