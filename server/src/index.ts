import express from 'express';
import cors from 'cors';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import { MapRepository } from './repositories/map.repository';

// const userRepository = new UserRepository();
const mapRepository = new MapRepository();

const userService = new UserService(mapRepository);
const userController = new UserController(userService);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.get('/', (req, res) => res.send('hi'));
app.get('/api/users', userController.findAllUsers);
app.post('/api/users', userController.createUser);

app.listen(3000, () => {
  console.log('http://localhost:3000 server started');
});
