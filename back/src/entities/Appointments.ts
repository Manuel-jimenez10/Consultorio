import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import { Status } from "../interfaces/appointmentsInterface";

@Entity({
    name: "appointments"
})
class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column()
    time: string

    @Column({
        default: "Active"
    })
    status: Status;

    @Column()
    description: string;

    @ManyToOne(() => User, (user) => user.turns)
    user: User
}

export default Appointment;