import { Router } from 'express';
import * as Watson from './watson';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome to our hotdogs or legs api!' });
});

router.post('/classify', (req, res) => {
  Watson.classifyImage(req.body.imageURL, res);
});

export default router;
