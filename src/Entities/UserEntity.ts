import { User, Semester } from "../Models";

export class UserEntity implements User {
    readonly Username: string;
    readonly SessionID: string;

    CurrentSemester(): Semester {
        throw new Error("Method not implemented.");
    }

    Semesters(): Semester[] {
        throw new Error("Method not implemented.");
    }

    constructor(username: string, session: string) {
        this.Username = username;
        this.SessionID = session;
    }
}
