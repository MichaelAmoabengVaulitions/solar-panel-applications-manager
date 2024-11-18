import api from './api';

export interface Application {
    id?: string;
    name: string;
    description: string;
    status: string;
}

// Fetch all applications
export const getApplications = async (): Promise<Application[]> => {
    const response = await api.get('/applications');
    return response.data;
};

// Fetch a single application by ID
export const getApplicationById = async (id: string): Promise<Application> => {
    const response = await api.get(`/applications/${id}`);
    return response.data;
};

// Create a new application
export const createApplication = async (data: Application): Promise<Application> => {
    const response = await api.post('/applications', data);
    return response.data;
};

// Update an application by ID
export const updateApplication = async (id?: string, data?: Application): Promise<Application> => {
    const response = await api.put(`/applications/${id}`, data);
    return response.data;
};

// Delete an application by ID
export const deleteApplication = async (id: string): Promise<void> => {
    await api.delete(`/applications/${id}`);
};
