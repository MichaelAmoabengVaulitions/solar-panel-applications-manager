import { Request, Response} from 'express';
import fs from 'fs';
import path from 'path';
import {Application} from "../models/Application";
import {getApplicationIndex} from "../utils/getApplicationIndex";

const dataPath = path.join(__dirname, '../../seed.json');

export const applications = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));


// Get all applications
export const getApplications = (req: Request, res: Response) => {

    res.status(200).json(applications);
};

// Get an application by ID
export const getApplicationById = (req: Request, res: Response) => {
    const { id } = req.params;
    const application = applications?.find((application: Application) => application?.id === id);


    if (!application?.id) {
        res.status(404).json({ message: 'Application not found' });
        return
    }

    res.status(200).json(application);
};

// Create a new application
export const createApplication = (req: Request, res: Response) => {
    const newApplication = req.body;
    const isExistingApplication = applications?.some((application: Application) => application?.id === newApplication?.id);

    if (isExistingApplication) {
        res.status(400).json({ message: 'Application with this ID already exists' });
        return
    }

    applications.push(newApplication);
    res.status(201).json(newApplication);
};

// Update an application by ID
export const updateApplication = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedApplication = req.body;
    const foundIndex = getApplicationIndex(applications, id);

    if (foundIndex === -1) {
        res.status(404).json({ message: 'Application not found' });
        return
    }

    applications[foundIndex] = { ...applications[foundIndex], ...updatedApplication };
    res.status(200).json(applications[foundIndex]);
};

// Delete an application by ID
export const deleteApplication = (req: Request, res: Response) => {
    const { id } = req.params;
    const foundIndex = getApplicationIndex(applications, id);

    if (foundIndex === -1) {
        res.status(404).json({ message: 'Application not found' });
        return
    }

    const deletedApplication = applications.splice(foundIndex, 1);
    res.status(200).json(deletedApplication);
};
