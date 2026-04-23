import {createUser} from '../controllers/user.js';
import {Router} from 'express';

const router = Router();

router.post('/createuser',createUser);

export default router;
