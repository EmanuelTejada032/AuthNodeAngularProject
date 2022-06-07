


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
    newToken?: string;
    message?: string;
    email?: string;
}

export interface LoggedInUser {
    uid: string;
    name: string;
    email: string;
}