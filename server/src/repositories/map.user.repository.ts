import { CreateUserForm } from '../dtos/create-user-form';
import { User } from '../entities/user.entity';
import { UserRepository } from './user.repository.interface';

export class MapUserRepository implements UserRepository {
  users = new Map<number, User>();
  sequence: number = 0;

  findAll() {
    return Array.from(this.users.values());
  }

  findByName(name: string): User | undefined {
    return Array.from(this.users.values()).find((user) => user.name === name);
  }

  findById(id: number) {
    return this.users.get(id);
  }

  createUser(user: CreateUserForm) {
    const newUser = { ...user, id: ++this.sequence };
    this.users.set(newUser.id, newUser);
    return newUser;
  }

  clear() {
    this.users.clear();
    this.sequence = 0;
  }
}
