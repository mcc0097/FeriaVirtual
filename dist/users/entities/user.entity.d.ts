export declare enum Role {
    ADMIN = "ADMIN",
    COMPANY = "COMPANY",
    CANDIDATE = "CANDIDATE"
}
export declare class User {
    id: number;
    email: string;
    password: string;
    role: Role;
}
