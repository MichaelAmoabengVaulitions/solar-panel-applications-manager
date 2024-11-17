import {Application} from "../models/Application";

export const getApplicationIndex = (applications: Application[], id: string) => {
    return applications?.findIndex((application: Application) => application?.id === id);
};
