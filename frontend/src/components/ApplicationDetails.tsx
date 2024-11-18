// src/components/ApplicationDetails.tsx
import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

interface Application {
    id: string;
    name: string;
    description: string;
    status: string;
}

interface ApplicationDetailsProps {
    application: Application;
    onBack: () => void;
}

const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({ application, onBack }) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    {application.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {application.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Status: {application.status}
                </Typography>
                <Button variant="outlined" onClick={onBack} sx={{ mt: 2 }}>
                    Back to List
                </Button>
            </CardContent>
        </Card>
    );
};

export default ApplicationDetails;
