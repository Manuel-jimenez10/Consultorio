export enum Status {
    ACTIVE = "Active",
    CANCELED = "Canceled",
    COMPLETED = "Completed"
}

interface IAppointments {
    id: number;
    date: Date;
    time: string;
    status: Status;
    description: string;
    userId: number;
}

export default IAppointments;