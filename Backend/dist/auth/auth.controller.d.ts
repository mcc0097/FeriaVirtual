import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(body: {
        email: string;
        password: string;
        role?: string;
    }): Promise<{
        id: number;
        email: string;
        role: import("../users/entities/user.entity").Role;
    }>;
    getProfile(req: any): {
        id: any;
        email: any;
        role: any;
    };
}
