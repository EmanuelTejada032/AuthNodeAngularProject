


export interface User {
    email: string;
    password: string;
}

export interface NewUser {
    name: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    ok: boolean;
    uid?: string;
    name?:  string;
    token?: string;
    msg?: string;
}

export interface LoggedInUser {
    uid: string;
    name: string;
}