import { Request, Response } from "express";
import ICredentialsDTO from "../interfaces/credentialsDTO";
import { createUserService, getUserByIdService, getUsersService, loginUserService } from "../services/userServices";
import IUserDTO from "../interfaces/createUserDTO";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService(); 

        res.status(200).json(users); 
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        };
};
};

export const getUserById = async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await getUserByIdService(userId);
        res.status(200).json(user);
    } catch (error: any) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        };
};
};

export const userRegister = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password }: IUserDTO = req.body;

        const newUser = await createUserService({
            username,
            password,
            name,
            email,
            birthdate,
            nDni
        });

        res.status(201).json(newUser); 
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
    };

export const userLogin = async (req: Request, res: Response) => {
        try {
            const {username, password}: ICredentialsDTO = req.body;
            const userExist = await loginUserService({
                username,password
            })

            if (userExist) {
                return res.status(200).json(userExist); 
            } else {
                throw new Error("Incorrect credentials, user not registered");
            }
        } catch (error: any) {
            return res.status(400).json({ error: error.message }); 
        }
        };
        