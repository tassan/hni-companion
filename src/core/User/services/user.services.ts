import {User} from "@/core/User/models/User";

export interface IUserService {
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User>;
    update(id: number, item: User): Promise<User>;
    delete(id: number): Promise<User>;
    createAdmin(item: User): Promise<User>;
    createPlayer(item: User): Promise<User>;
}

const _repository = require("@/core/User/repositories/user.repository");

export class UserService implements IUserService {

    createAdmin(item: User): Promise<User> {
        if (!item.validate()) {
            return Promise.reject("Invalid model");
        }

        item.type = "admin";
        return _repository.create(item);
    }

    createPlayer(item: User): Promise<User> {
        if (!item.validate()) {
            return Promise.reject("Invalid model");
        }

        item.type = "player";
        return _repository.create(item);
    }

    delete(id: number): Promise<User> {
        return _repository.delete(id);
    }

    getAll(): Promise<User[]> {
        return _repository.getAll();
    }

    getById(id: number): Promise<User> {
        return _repository.getById(id);
    }

    update(id: number, item: User): Promise<User> {
        if (!item.validate()) {
            return Promise.reject("Invalid model");
        }

        return _repository.update(id, item);
    }

}
