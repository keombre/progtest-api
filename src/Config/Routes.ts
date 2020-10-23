export class Routes {
    static readonly Base: string = "http://ptmock.localhost:8080";

    static readonly Shibboleth: string = Routes.Base + "/shibboleth-fit.php";
    static readonly Login: string = Routes.Base + "/?X=Login&Lg=1";

    static readonly MainBase: string = Routes.Base + "/index.php";
    static readonly Main: string = Routes.MainBase + "?X=Main";

    static readonly Subject: (id: number) => string = id => Routes.MainBase + "?X=Course&Cou=" + id;
}
