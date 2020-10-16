interface User {
    Username: string;
    SignedIn: boolean;

    CurrentSemester: Semester;
    Semesters: Array<Semester>;

    Login(): boolean;
    Login(username:string, password:string, option: SignInOptions): boolean;
    Logout(): boolean;
}

enum SignInOptions {
    CTU_FIT,
    CTU_FEL,
    SiliconHill_Password,
    Other,
    VSB_FEI,
    Montererry
}
