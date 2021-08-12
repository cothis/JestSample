import { CreateUserForm } from '../dtos/create-user-form';
import { UserRepository } from '../repositories/user.repository.interface';

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
    this.validateDuplicateUser(user.name);

    return this.userRepository.createUser(user);
  }

  validateDuplicateUser(name: string) {
    if (this.userRepository.findByName(name)) {
      throw new Error('이미 가입한 이름입니다.');
    }
  }
}
