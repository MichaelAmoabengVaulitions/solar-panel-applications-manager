import React from 'react';
import styles from './ApplicationList.module.scss';
import { Application } from '../services/applicationService';

interface ApplicationListProps {
    applications: Application[];
    onView: (application: Application) => void;
}

const ApplicationList: React.FC<ApplicationListProps> = ({ applications, onView }) => {
    return (
        <div className={styles['list-container']}>
            <h2 className={styles['list-title']}>Applications</h2>
            {applications.map((app) => (
                <div key={app.id} className={styles['application-item']}>
                    <div className={styles['application-details']}>
                        <h3>{app.name}</h3>
                        <p>{app.description}</p>
                        <p><strong>Status:</strong> {app.status}</p>
                    </div>
                    <div className={styles.actions}>
                        <button className={styles.view} onClick={() => onView(app)}>View</button>
                       {/*<button className={styles.delete} onClick={() => onDelete(app.id)}>Delete</button>*/}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ApplicationList;
