import express from 'express';
import newsLetterRoutes from './newsletter.route';
import userRoutes from './user.route'

const router = express.Router();

// mount auth routes at /auth
router.use('/newsletter', newsLetterRoutes);
router.use('/user', userRoutes);

export default router;