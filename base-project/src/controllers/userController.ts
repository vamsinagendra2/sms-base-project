import express, { Request, Response } from 'express';
import { getUserbyIdHelper, getUsersHelper } from '../services/userService';

const router = express.Router();

router.get(
  '/',
  async function getUsers(req: Request, res: Response) {
    try {
      const users = await getUsersHelper();
  
      res.status(200).json({
        error: false,
        message: 'success',
        data: users,
      });
  
    } catch (e) {
  
      res.status(500).send({
        error: true,
        code: 'kutuki/internal-error',
        message: 'Oops! Unable to get users',
      });
    }
  }
);

router.get(
  '/:id',
  async function getUser(req: Request, res: Response) {
    try {
      
      const users = await getUserbyIdHelper(req.path.replace("/", ""));
  
      res.status(200).json({
        error: false,
        message: 'success',
        data: users,
      });
  
    } catch (e) {
  
      res.status(500).send({
        error: true,
        code: 'kutuki/internal-error',
        message: 'Oops! Unable to get users',
      });
    }
  }
);

export default router;

