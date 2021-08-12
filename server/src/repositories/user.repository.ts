import { CreateUserForm } from '../dtos/create-user-form';
import { User } from '../entities/user.entity';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  users: User[] = [];
  sequence: number = 0;

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id == id);
  }

  findByName(name: string): User | undefined {
    return this.users.find((user) => user.name === name);
  }

  createUser(user: CreateUserForm) {
    const newUser = { ...user, id: ++this.sequence };
    this.users.push(newUser);
    return newUser;
  }

  clear() {
    this.users = [];
    this.sequence = 0;
  }
}
