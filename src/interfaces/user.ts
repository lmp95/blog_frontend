export interface UserInterface {
    token: string | undefined | null;
    username: string | null;
    role: string | null;
}

export interface LoginInterface {
    email: string;
    password: string;
}

export interface RegisterUserInterface {
    username: string;
    email: string;
    password: string;
    role: string;
}
