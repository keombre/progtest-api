import { Subject } from ".";

export interface Semester {
    Winter: boolean;
    StartYear: number;

    Subjects: Array<Subject>;
}
