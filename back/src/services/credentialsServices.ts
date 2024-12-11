import { credentialModel } from "../config/dataSource";
import Credential from "../entities/Credential";
import ICredentialsDTO from "../interfaces/credentialsDTO";


export const createCredentials = async (credentialsDTO: ICredentialsDTO): Promise<number> => {
    const newCredential: Credential = await credentialModel.create(credentialsDTO);
    await credentialModel.save(newCredential);
    return newCredential.id;
}

export const validateCredentials = async (credentialsDTO: ICredentialsDTO) => {
    const foundCredentials: Credential | null = await credentialModel.findOneBy({username: credentialsDTO.username})
    if(foundCredentials.password !== credentialsDTO.password) {
        throw Error("Credenciales incorrectas")
    }  else if (!foundCredentials) {
        throw Error("Credenciales no encontradas")
    } else {
        return foundCredentials.id
    }
}