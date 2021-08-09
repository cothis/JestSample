import { Request, Response } from 'express';
import { UserService } from '../services/user.service';

export class UserController {
  userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  findAllUsers = (req: Request, res: Response) => {
    try {
      res.json(this.userService.findAll());
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  findById = (req: Request, res: Response) => {
    try {
      res.json(this.userService.findById(Number(req.params.id)));
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
}
