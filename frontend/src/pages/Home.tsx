import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import { getApplications, createApplication, deleteApplication, Application } from '../services/applicationService';
import ApplicationList from '../components/ApplicationList';
import ApplicationForm from '../components/ApplicationForm';

const Home: React.FC = () => {
    const [applications, setApplications] = useState<Application[]>([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {
        try {
            const data = await getApplications();
            setApplications(data);
        } catch (error) {
            console.error('Failed to fetch applications:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteApplication(id);
            loadApplications();
        } catch (error) {
            console.error('Failed to delete application:', error);
        }
    };

    return (
        <div className={styles['home-container']}>
            <h1 className={styles.title}>Application Management</h1>
            <button className={styles['action-button']} onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Back to List' : 'Add New Application'}
            </button>
            {showForm ? (
                <ApplicationForm
                    onSubmit={(data) => {
                        createApplication(data).then(loadApplications);
                        setShowForm(false);
                    }}
                    onCancel={() => setShowForm(false)}
                />
            ) : (
                <ApplicationList
                    applications={applications}
                    onView={(app) => console.log('View Application:', app)}
                    //onDelete={handleDelete}
                />
            )}
        </div>
    );
};

export default Home;
