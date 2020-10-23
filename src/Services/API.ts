import nodeFetch, { Response } from "node-fetch";
import { URL } from "url";
import FormData = require("form-data");
import { DOMParser } from "xmldom";
import { CookieJar } from "fetch-cookie";

export class API {
    public static async Get(uri: string, jar: CookieJar): Promise<Response> {
        const fetch = require('fetch-cookie/node-fetch')(nodeFetch, jar);
        return await fetch(uri);
    }

    public static async Post(uri: string, data: Map<string, string>, jar: CookieJar): Promise<Response> {
        const fetch = require('fetch-cookie/node-fetch')(nodeFetch, jar);

        const fd = new FormData();
        data.forEach((val, key) => fd.append(key, val));
        return await fetch(uri, {
            method: 'POST',
            body: fd
        });
    }

    public static GetParams(resp: Response): Map<string, string> {
        const ret : Map<string, string> = new Map<string, string>();

        (new URL(resp.url)).search.substr(1).split("&").forEach(e => {
            let k = e.split("=");
            ret.set(k[0], k[1]);
        })

        return ret;
    }

    public static async ParseHTML(resp: Response): Promise<Document> {
        const text = await resp.text();
        return new DOMParser().parseFromString(text, 'text/html');
    }

    public static GetUsername(doc: Document): string | undefined {
        const title = doc.documentElement.getElementsByTagName("title")[0].firstChild?.nodeValue;
        if (title == undefined)
            return undefined;
        if (!title.includes('@progtest.fit.cvut.cz'))
            return undefined;
        return title.substring(0, title.indexOf('@'));
    }

    public static IsLogin(doc: Document): boolean {
        const title = doc.documentElement.getElementsByTagName("title")[0].firstChild?.nodeValue;
        if (title == undefined)
            return true;
        return !title.includes('@');
    }
}
