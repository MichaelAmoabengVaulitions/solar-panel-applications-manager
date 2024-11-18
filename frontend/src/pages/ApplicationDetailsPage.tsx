import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Application, getApplicationById } from '../services/applicationService';

const ApplicationDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [application, setApplication] = useState<Application | null>(null);

    useEffect(() => {
        const loadApplication = async () => {
            if (!id) return;
            try {
                const data = await getApplicationById(id);
                setApplication(data);
            } catch (error) {
                console.error('Failed to fetch application:', error);
            }
        };

        loadApplication();
    }, [id]);

    if (!application) return <p>Loading...</p>;

    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            <h1>{application.name}</h1>
            <p>{application.description}</p>
            <p>Status: {application.status}</p>
        </div>
    );
};

export default ApplicationDetailsPage;
