import { Semester } from ".";

export interface User {
    readonly Username: string;
    readonly SessionID: string;

    CurrentSemester(): Semester;
    Semesters(): Array<Semester>;
}

export enum University {
    CTU_FEL = 1,
    CTU_FIT = 2,
    SiliconHill = 3,
    VSB_FEI = 4,
    Montererry = 5,
    Other = 6,
}
