export class Character {
    id: number;
    name: string;
    age: number;
    rank: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, name: string, age: number, rank: string, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.rank = rank;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static validate(character: Character): boolean {
        if (character.name === undefined || character.name === null || character.name === '') {
            return false;
        }

        if (character.age === undefined || character.age === null || character.age < 0) {
            return false;
        }

        if (character.rank === undefined || character.rank === null || character.rank === '') {
            return false;
        }

        return true;
    }

    validate() {
        return Character.validate(this);
    }
}