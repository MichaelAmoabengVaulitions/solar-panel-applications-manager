export interface Application {
    id: string;
    name: string;
    description: string;
    status: "in_review" | "approved" | "rejected";
}
