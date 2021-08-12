import { CreateUserForm } from '../dtos/create-user-form';
import { User } from '../entities/user.entity';

export interface IUserRepository {
  findByName(name: string): User | undefined;

  findAll(): User[];

  findById(id: number): User | undefined;

  createUser(user: CreateUserForm): User;

  clear(): void;
}
