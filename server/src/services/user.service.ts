import { CreateUserForm } from '../dtos/create-user-form';
import { User } from '../entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

export class UserService {
  userRepository!: UserRepository;

  constructor(userRepository: UserRepository) {
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
