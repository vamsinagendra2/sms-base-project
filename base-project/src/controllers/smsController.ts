import express, { Request, response, Response } from 'express';
import { getMessages, sendSms } from '../services/smsService';

const router = express.Router();

router.post(
  '/',
  async function smsController(req: Request, res: Response) {

    try {

      const restponse = await sendSms(req.body);

      res.status(200).json({
        error: false,
        message: 'success',
        data: response,
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

router.post(
  '/messages',
  async function smsController(req: Request, res: Response) {

    try {

      const messages = await getMessages();

      res.status(200).json({
        error: false,
        message: 'success',
        data: messages,
      });

    } catch (e) {

      res.status(500).send({
        error: true,
        code: 'kutuki/internal-error',
        message: 'Oops! Unable to get messages',
      });
    }
  }
);

export default router;
