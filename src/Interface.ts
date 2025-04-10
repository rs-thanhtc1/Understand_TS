interface Authenticatable {
    email: string;
    password: string;

    login(): void;
    logout(): void;
}

class AuhtenticatableUser implements Authenticatable {
    constructor (public email: string, public password: string){

    }

    login(): void {
        
    }

    logout(): void {
        
    }
}