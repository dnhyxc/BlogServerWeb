declare class UserServer {
    createUser({ username, password }: {
        username: any;
        password: any;
    }): Promise<string>;
}
declare const _default: UserServer;
export default _default;
