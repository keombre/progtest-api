class Auth {
    async Login() : Promise<User>;
    async Login(username: string, password: string, uni: University): Promise<User>;

    async Login(username?: string, password?: string, uni?: University): Promise<User> {
        if (username && password && uni) {
            await API.Post(Routes.Login, {
                'UID_UNIVERSITY': uni,
                'USERNAME': username,
                'PASSWORD': password,
                'Login': 'Login'
            })
        }
        await fetch(Routes.Shibboleth);
        return new UserEntity("");
    }
}
