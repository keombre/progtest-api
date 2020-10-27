import { CookieJar } from "tough-cookie";
import { Credentials } from "../Models";

export class CredentialsEntity implements Credentials {
    public readonly Cookies: CookieJar;
    constructor();
    constructor(jar?: CookieJar) {
        if (jar == undefined)
            this.Cookies = new CookieJar();
        else
            this.Cookies = jar;
    }
}
