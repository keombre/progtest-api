import { CookieJar } from "tough-cookie";
import { Subject } from ".";

export interface User {
    readonly Username: string;
    readonly Cookies: CookieJar;

    Semesters(): Promise<Map<string, Array<Subject>>>;
}

export enum University {
    CTU_FEL = 1,
    CTU_FIT = 2,
    SiliconHill = 3,
    VSB_FEI = 4,
    Montererry = 5,
    Other = 6,
}
