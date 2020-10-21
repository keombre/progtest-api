import fetch from "node-fetch";

export namespace Services {
    export class API {
        public static async Get(uri: string): Promise<string> {
            const resp = await fetch(uri);
            return await resp.text();
        }

        public static async Post(uri: string, data: Object): Promise<string> {
            const resp = await fetch(uri, {
                method: 'POST',
                redirect: 'follow',
                body: JSON.stringify(data)
            });
            return await resp.text();
        }
    }
}
