import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointments";

@Entity({
    name: "users"
})
class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name:string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column()
    nDni: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: number

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    turns: Appointment[]
}

export default User