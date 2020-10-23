import { API } from ".";
import { University, User } from "../Models";
import { Routes } from "../Config";
import { UserEntity } from "../Entities";
import { CookieJar } from "tough-cookie";

export class Auth {
    public static async Login() : Promise<User>;
    public static async Login(username: string, password: string, uni: University): Promise<User>;

    public static async Login(username?: string, password?: string, uni?: University): Promise<User | undefined> {
        if (username && password && uni) {
            const jar = new CookieJar();
            const resp = await API.Post(Routes.Login, new Map([
                ['UID_UNIVERSITY', uni.toString()],
                ['USERNAME', username],
                ['PASSWORD', password],
                ['Login', 'Login'],
                ['lang', '?X=Main&Lg=1']
            ]), jar);

            const params = API.GetParams(resp);
            if (!params.has('X') || params.get('X') != 'Main')
                return undefined;

            const doc = await API.ParseHTML(resp);
            const uname = API.GetUsername(doc);
            if (uname == undefined)
                return undefined;

            return new UserEntity(uname, jar);
        }
        throw new Error("Shibboleth sign-in is not currently supported");
    }
}
