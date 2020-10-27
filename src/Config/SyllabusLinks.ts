import { URL } from "url";

export class SyllabusLinks {

    public static Override: Map<string, string> = new Map<string, string>([
        ["BI-PA1", "https://courses.fit.cvut.cz/BI-PA1/"]
    ]);

    public static GetLink(name: string): URL {
        const override = this.Override.get(name);
        if (override != undefined)
            return new URL(override);
        return new URL("https://courses.fit.cvut.cz/" + name.toUpperCase() + "/");
    }
}
