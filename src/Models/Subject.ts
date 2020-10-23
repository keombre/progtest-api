import { URL } from "url";
import { AssignmentGroup } from ".";

export interface Subject {
    readonly Id: number;
    readonly Name: string;
    readonly FullName: string;
    readonly SyllabusLink: URL;
    readonly Icon: string;

    AssignmentGroups(): Promise<Array<AssignmentGroup>>;
}
