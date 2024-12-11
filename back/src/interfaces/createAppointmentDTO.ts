import { Status } from "./appointmentsInterface";

interface IAppointmentsDTO {
    date: Date;
    time: string;
    status: Status;
    userId: number;
    description: string
};

export default IAppointmentsDTO;