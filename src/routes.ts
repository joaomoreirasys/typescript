import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'joaomoreira.a.s@gmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'javascript', experience: 100 }
        ],
    });
    return response.json({ user });
}