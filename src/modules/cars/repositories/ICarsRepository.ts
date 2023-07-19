import { Car } from '../entities/Car';

export interface ICarsRepository {
  findById(id: string): Promise<Car>;
}
