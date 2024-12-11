import IUserDTO from "../interfaces/createUserDTO";
import { createCredentials, validateCredentials } from "./credentialsServices";
import ICredentialsDTO from "../interfaces/credentialsDTO";
import { userModel } from "../config/dataSource";
import User from "../entities/User";

export const getUsersService = async (): Promise<User[]> => {
    const allusers: User[] = await userModel.find();
    return allusers;
}

export const getUserByIdService = async (id: number): Promise<User> => {
    try {
        const foundUser: User | null = await userModel.findOne({
            where: { id }
        });

        if (!foundUser) {
            throw new Error("Usuario no encontrado");
        }

        return foundUser;
    } catch (error) {
        throw new Error(`Error al obtener usuario por ID: ${error.message}`);
    }
};

export const createUserService = async (createUserDTO: IUserDTO): Promise<User> => {
    const newUser = userModel.create(createUserDTO)
    const credential = await createCredentials({
     username: createUserDTO.username,
     password: createUserDTO.password
    })
    newUser.credential = credential
    await userModel.save(newUser)
    return newUser
}

export const loginUserService = async (credentialsDTO: ICredentialsDTO) => {
    const userExist = await validateCredentials(credentialsDTO)
    if(userExist) return userExist;
}