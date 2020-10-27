import { URL } from "url";
import { Routes, SyllabusLinks } from "../Config";
import { AssignmentGroup, Credentials, Subject } from "../Models";
import { API } from "../Services";

export class SubjectEntity implements Subject {
    readonly Id: number;
    readonly Name: string;
    readonly FullName: string;
    readonly SyllabusLink: URL;
    readonly Icon: string;

    private readonly Assig: Array<AssignmentGroup> = new Array<AssignmentGroup>();
    private readonly Cred: Credentials;

    constructor(id: number, name: string, fullname: string, cred: Credentials) {
        this.Id = id;
        this.Name = name;
        this.FullName = fullname;
        this.SyllabusLink = SyllabusLinks.GetLink(name);
        this.Icon = "";
        this.Cred = cred;
    }

    private async Sync(): Promise<void> {
        this.Assig.length = 0;
        const resp = await API.Get(Routes.SubjectOverview(this.Id), this.Cred);
        
        resp;
    }

    async AssignmentGroups(): Promise<AssignmentGroup[]> {
        await this.Sync();
        return this.Assig;
    }
}
