/**
 * Para criar um usuário: name, email, password
 */
interface ITechObject {
    title: string;
    experience: number;
}

interface ICreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | ITechObject>;
}

export default function createUser({ name, email, password, techs }: ICreateUserData) {
    const user = {
        name,
        email,
        password,
        techs
    }
    return user;
}