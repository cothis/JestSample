import express from 'express';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => res.send('hi'));
app.get('/api/users', userController.findAllUsers);

app.listen(3000, () => {
  console.log('http://localhost:3000 server started');
});
