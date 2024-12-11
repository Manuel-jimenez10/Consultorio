import { Router } from "express";
import { appointmentCancel, appointmentSchedule, getAllAppointments, getAppointmentById } from "../controller/appointmentsController";

const appointmentsRouter: Router = Router();

appointmentsRouter.get("/", getAllAppointments);

appointmentsRouter.get("/:id", getAppointmentById);

appointmentsRouter.post("/schedule", appointmentSchedule);

appointmentsRouter.put("/cancel/:id", appointmentCancel);

export default appointmentsRouter;