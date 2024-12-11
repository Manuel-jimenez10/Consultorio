import { Request, Response } from "express";
import { appointmentCancelService, createAppointmentService, getAllAppointmentsService, getAppointmentByIdService } from "../services/appointmentsService";

export const getAllAppointments = async (req: Request, res: Response) => {
        try {
          const appointments = await getAllAppointmentsService();
          res.status(200).json(appointments); 
        } catch (error: any) {
          res.status(500).json({ error: error.message });
};}

export const getAppointmentById = async (req: Request, res: Response) => {
    const appointmentId = parseInt(req.params.id); 
    try {
      const appointment = await getAppointmentByIdService(appointmentId); 
      res.status(200).json(appointment);
    } catch (error: any) {
      res.status(404).json({ error: error.message });
    }
};

export const appointmentSchedule = async (req: Request, res: Response) => {
    try {
        const createAppointmentDTO = req.body;

        const newAppointment = await createAppointmentService(createAppointmentDTO);

        res.status(201).json({
            message: 'Turno creado exitosamente',
            appointment: newAppointment
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Error desconocido' });
        };
    };
    };

export const appointmentCancel = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id); 

    try {
        const canceledAppointment = await appointmentCancelService(id); 

        res.status(200).json({
            message: `Turno con ID ${canceledAppointment.id} ha sido cancelado correctamente`,
            appointment: canceledAppointment 
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Error desconocido' });
        };
    };
        };
        