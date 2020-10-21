import { CookieJar } from "tough-cookie";
import { User, Semester } from "../Models";

export class UserEntity implements User {
    readonly Username: string;
    readonly Cookies: CookieJar;

    CurrentSemester(): Semester {
        throw new Error("Method not implemented.");
    }

    Semesters(): Semester[] {
        throw new Error("Method not implemented.");
    }

    constructor(username: string, jar: CookieJar) {
        this.Username = username;
        this.Cookies = jar;
    }
}
