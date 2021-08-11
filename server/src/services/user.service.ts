import { CreateUserForm } from '../dtos/create-user-form';
import { User } from '../entities/user.entity';
import { IUserRepository } from '../repositories/IUserRepository';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  userRepository!: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findById(id: number) {
    return this.userRepository.findById(id);
  }

  createUser(user: CreateUserForm) {
    return this.userRepository.createUser(user);
  }
}
