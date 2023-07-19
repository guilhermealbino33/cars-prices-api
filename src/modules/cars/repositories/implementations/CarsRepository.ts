import { Car } from '../../entities/Car';
import { ICarsRepository } from '../ICarsRepository';

export class CarsRepository implements ICarsRepository {
  findById(id: string): Promise<Car> {
    throw new Error('Method not implemented.');
  }
}
