import { UserController } from './controllers/user.controller';
import { MapUserRepository } from './repositories/map.user.repository';
import { ArrayUserRepository } from './repositories/array.user.repository';
import { UserService } from './services/user.service';

// const userRepository = new UserRepository();
const userRepository = new MapUserRepository();

export { userRepository };
export const userService = new UserService(userRepository);
export const userController = new UserController(userService);
