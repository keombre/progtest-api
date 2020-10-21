import { Semester, Subject } from "../Models";

export class SemesterEntity implements Semester {
    Winter: boolean = false;
    StartYear: number = 2020;
    Subjects: Subject[] = new Array;
}
