import fetch from "node-fetch";
import { Services } from ".";
import { University, User } from "../Models";
import { Routes } from "../Config";
import { UserEntity } from "../Entities";

export class Auth {
    public static async Login() : Promise<User>;
    public static async Login(username: string, password: string, uni: University): Promise<User>;

    public static async Login(username?: string, password?: string, uni?: University): Promise<User> {
        if (username && password && uni) {
            await Services.API.Post(Routes.Login, {
                'UID_UNIVERSITY': uni,
                'USERNAME': username,
                'PASSWORD': password,
                'Login': 'Login'
            })
        }
        await fetch(Routes.Shibboleth);
        return new UserEntity("", "");
    }
}
