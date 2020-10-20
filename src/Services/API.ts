class API {
    static async Get(uri: string): Promise<string> {
        const resp = await fetch(uri);
        return await resp.text();
    }

    static async Post(uri: string, data: Object): Promise<string> {
        const resp = await fetch(uri, {
            method: 'POST',
            mode: 'same-origin',
            cache: 'no-cache',
            credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return await resp.text();
    }
}
