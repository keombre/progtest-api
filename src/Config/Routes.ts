export class Routes {
    static readonly Base: string = "http://ptmock.localhost:8080";

    static readonly Shibboleth: string = Routes.Base + "/shibboleth-fit.php";
    static readonly Login: string = Routes.Base + "/?X=Login&Lg=1";

}