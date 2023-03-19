export class User {
    id: number;
    name: string;
    email: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: number,
        name: string,
        email: string,
        type: string,
        createdAt: Date,
        updatedAt: Date) {

        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static validate(user: User): boolean {
        if (user.name.length < 3) {
            return false;
        }

        if (user.email.length < 3) {
            return false;
        }

        if (user.type.length < 3) {
            return false;
        }

        return true;
    }

    validate() {
        return User.validate(this);
    }
}