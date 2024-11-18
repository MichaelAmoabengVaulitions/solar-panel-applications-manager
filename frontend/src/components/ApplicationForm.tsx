// src/components/ApplicationForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

interface ApplicationFormProps {
    initialData?: {
        id?: string;
        name: string;
        description: string;
        status: string;
    } | undefined;
    onSubmit: (data: { id?: string; name: string; description: string; status: string }) => void;
    onCancel: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ initialData, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: initialData?.name || '',
        description: initialData?.description || '',
        status: initialData?.status || 'in_review',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box
            component="form"
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h6" gutterBottom>
                {initialData ? 'Edit Application' : 'Create Application'}
            </Typography>
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                margin="normal"
                required
                multiline
                rows={4}
            />
            <TextField
                fullWidth
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                margin="normal"
                required
                select
                SelectProps={{ native: true }}
            >
                <option value="in_review">In Review</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
            </TextField>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button onClick={onCancel} variant="outlined" sx={{ mr: 2 }}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default ApplicationForm;
