import { UserController } from './controllers/user.controller';
import { MapRepository } from './repositories/map.repository';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

// const userRepository = new UserRepository();
const userRepository = new MapRepository();

export { userRepository };
export const userService = new UserService(userRepository);
export const userController = new UserController(userService);
