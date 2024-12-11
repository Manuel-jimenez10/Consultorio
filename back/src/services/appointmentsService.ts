import { error } from "console";
import { appointmentModel } from "../config/dataSource";
import Appointment from "../entities/Appointments";
import User from "../entities/User";
import { Status } from "../interfaces/appointmentsInterface";
import IAppointmentsDTO from "../interfaces/createAppointmentDTO";
import { getUserByIdService } from "./userServices";


export const getAllAppointmentsService = async (): Promise<Appointment[]> => {
  const allAppointments = appointmentModel.find({
    relations: ["user"],
  })
  return allAppointments;
};

export const getAppointmentByIdService = async (id: number): Promise<Appointment> => {
  
    const foundAppointment = await appointmentModel.findOne({
      where: {
        id
      }
      
    });
    
    if (!foundAppointment) {
      throw new Error("Turno no encontrado");
    }
    
    return foundAppointment;
  } 

  export const createAppointmentService = async (createAppointmentDTO: IAppointmentsDTO): Promise<Appointment> => {
    const newAppointment: Appointment = appointmentModel.create(createAppointmentDTO);
    const user: User = await getUserByIdService(createAppointmentDTO.userId);

    newAppointment.user = user;
    await appointmentModel.save(newAppointment);  
    return newAppointment;
};


export const appointmentCancelService = async (id: number): Promise<Appointment> => {
  const appointment = await appointmentModel.findOne({
      where: {
          id
      },
  });

  if (!appointment) throw Error("Turno no encontrado");

  appointment.status = Status.CANCELED;
  await appointmentModel.save(appointment); 

  return appointment;
};