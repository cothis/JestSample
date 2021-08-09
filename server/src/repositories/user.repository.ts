import { User } from '../entities/user.entity';

export class UserRepository {
  users: User[] = [];
  sequence: number = 0;

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id == id);
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
