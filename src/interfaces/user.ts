export interface UserInterface {
    _id?: string | null;
    username: string | null;
    email: string | null;
    role: string | null;
}

export interface AuthUserInterface extends UserInterface {
    token: string | undefined | null;
}

export interface LoginInterface extends UserInterface {
    password: string;
}
