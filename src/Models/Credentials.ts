import { CookieJar } from "tough-cookie";

export interface Credentials {
    readonly Cookies: CookieJar;
}
