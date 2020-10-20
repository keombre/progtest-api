class UserEntity implements User {
    readonly Username: string;

    CurrentSemester(): Semester {
        throw new Error("Method not implemented.");
    }

    Semesters(): Semester[] {
        throw new Error("Method not implemented.");
    }

    constructor(username: string) {
        this.Username = username;
    }
}
