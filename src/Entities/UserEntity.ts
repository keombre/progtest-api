import { CookieJar } from "tough-cookie";
import { Routes } from "../Config";
import { User, Subject } from "../Models";
import { API } from "../Services";
import { SubjectEntity } from "./SubjectEntity";

export class UserEntity implements User {
    readonly Username: string;
    readonly Cookies: CookieJar;

    private Sems: Map<string, Array<Subject>> = new Map<string, Array<Subject>>();

    private async LoadSems(): Promise<void> {
        this.Sems.clear();
        const resp = await API.Get(Routes.Main, this.Cookies);
        const doc = await API.ParseHTML(resp);
        if (API.IsLogin(doc))
            throw new Error("Not signed in");

        const subjects = doc.documentElement.getElementsByTagName("table")[1].getElementsByTagName("tr");

        for (let i = 0; i < subjects.length; i++) {
            const subject = subjects.item(i);
            const subName = subject?.getElementsByTagName("span")[0].firstChild?.nodeValue;
            if (subName == undefined)
                throw new Error('Unable to parse subject name');

            const link = subject?.getElementsByTagName('a')[0];
            const subLink = link?.getAttribute('href');
            if (subLink == undefined)
                throw new Error('Unable to parse subject id');
            if (!subLink.includes('?X=Course'))
                continue;

            const subFullName = subName.substr(0, subName.indexOf('(') - 1);
            const subId = parseInt(subLink.substr(subLink.indexOf('&Cou=') + 5));

            const subShortName = link?.firstChild?.nodeValue;
            if (subShortName == undefined)
                throw new Error('Unable to parse subject code');

            const semId = subName.substr(subName.indexOf('(') + 1, 7);
            if (this.Sems.has(semId))
                this.Sems.get(semId)?.push(new SubjectEntity(subId, subShortName, subFullName));
            else
                this.Sems.set(semId, new Array<Subject>(new SubjectEntity(subId, subShortName, subFullName)));
        }
    }

    public async Semesters(): Promise<Map<string, Array<Subject>>> {
        await this.LoadSems();
        return this.Sems;
    }

    constructor(username: string, jar: CookieJar) {
        this.Username = username;
        this.Cookies = jar;
    }
}
