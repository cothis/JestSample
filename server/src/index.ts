import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { userController } from './di';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.get('/', (req, res) => res.send('hi'));
app.get('/api/users', userController.findAllUsers);
app.post('/api/users', userController.createUser);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({ message: err.message });
});
app.listen(3000, () => {
  console.log('http://localhost:3000 server started');
});
