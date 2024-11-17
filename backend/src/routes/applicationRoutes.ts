import express from 'express';
import {
    getApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    deleteApplication,
} from '../controllers/applicationController';

const router = express.Router();

// GET all applications
router.get('/', getApplications);

// GET an application by ID
router.get('/:id', getApplicationById);

// POST a new application
router.post('/', createApplication);

// PUT to update an application by ID
router.put('/:id', updateApplication);

// DELETE an application by ID
router.delete('/:id', deleteApplication);

export default router;
