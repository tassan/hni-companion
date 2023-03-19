import {Character} from "@/core/Character";

export interface ICharacterServices {
    getAll(): Promise<Character[]>;
    getById(id: number): Promise<Character>;
    create(item: Character): Promise<Character>;
    createChuunin(item: Character): Promise<Character>;
    createJounin(item: Character): Promise<Character>;
    createAnbu(item: Character): Promise<Character>;
    createNukenin(item: Character): Promise<Character>;
    update(id: number, item: Character): Promise<Character>;
    delete(id: number): Promise<Character>;
}

const _repository = require('./character.repository');

export class CharacterServices implements ICharacterServices {
    create(item: Character): Promise<Character> {
        let character = new Character(item.id, item.name, item.age, item.rank, item.createdAt, item.updatedAt);

        if (item.rank === 'Chuunin') {
            return this.createChuunin(item);
        } else if (item.rank === 'Jounin') {
            return this.createJounin(item);
        } else if (item.rank === 'Anbu') {
            return this.createAnbu(item);
        } else if (item.rank === 'Nukenin') {
            return this.createNukenin(item);
        } else {
            return _repository.create(character);
        }
    }

    createAnbu(item: Character): Promise<Character> {

        if (!item.validate()) {
            return Promise.reject('Invalid model');
        }

        return _repository.create(item);
    }

    createChuunin(item: Character): Promise<Character> {

        if (!item.validate()) {
            return Promise.reject('Invalid model');
        }

        if (item.age < 15) {
            return Promise.reject('Age must be greater than 15');
        }

        return _repository.create(item);
    }

    createJounin(item: Character): Promise<Character> {

        if (!item.validate()) {
            return Promise.reject('Invalid model');
        }

        if (item.age < 17) {
            return Promise.reject('Age must be greater than 17');
        }

        return _repository.create(item);
    }

    createNukenin(item: Character): Promise<Character> {

        if (!item.validate()) {
            return Promise.reject('Invalid model');
        }

        return _repository.create(item);
    }

    delete(id: number): Promise<Character> {
        return _repository.delete(id);
    }

    getAll(): Promise<Character[]> {
        return _repository.getAll();
    }

    getById(id: number): Promise<Character> {
        return _repository.getById(id);
    }

    update(id: number, item: Character): Promise<Character> {

        if (!item.validate()) {
            return Promise.reject('Invalid model');
        }

        if (item.rank === 'Chuunin') {
            if (item.age < 15) {
                return Promise.reject('Age must be greater than 15');
            }
        }

        if (item.rank === 'Jounin') {
            if (item.age < 17) {
                return Promise.reject('Age must be greater than 17');
            }
        }

        return _repository.update(id, item);
    }

}