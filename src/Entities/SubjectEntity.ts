import { URL } from "url";
import { SyllabusLinks } from "../Config";
import { AssignmentGroup, Subject } from "../Models";

export class SubjectEntity implements Subject {
    readonly Id: number;
    readonly Name: string;
    readonly FullName: string;
    readonly SyllabusLink: URL;
    readonly Icon: string;
    
    constructor(id: number, name: string, fullname: string) {
        this.Id = id;
        this.Name = name;
        this.FullName = fullname;
        this.SyllabusLink = SyllabusLinks.GetLink(name);
        this.Icon = "";
    }

    async AssignmentGroups(): Promise<AssignmentGroup[]> {
        throw new Error("Method not implemented.");
    }
}
