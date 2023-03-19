import {User} from "@prisma/client";
import {PrismaClient} from '@prisma/client'
import IRepository from "@/core/Interfaces/Repository";

const _prisma = new PrismaClient()
export class UserRepository implements IRepository<User> {
    create(item: User): Promise<User> {

        return _prisma.user.create({
            data: {
                name: item.name,
                email: item.email,
                type: item.type,
            }
        })

    }

    delete(id: number): Promise<User> {
        return _prisma.user.delete({
                where: {
                    id: id
                }
            }
        )
    }

    getAll(): Promise<User[]> {
        return _prisma.user.findMany()
    }

    getAllByFilter(filter: {}): Promise<User[]> {
        return _prisma.user.findMany({
            where: {
                ...filter
            }
        });
    }

    getById(id: number): Promise<User> {
        return _prisma.user.findUnique({
            where: {
                id: id
            }
        }).then((user) => {
            return user as User;
        });
    }

    update(id: number, item: User): Promise<User> {
        return _prisma.user.update({
            where: {
                id: id
            },
            data: {
                name: item.name,
                email: item.email,
                type: item.type,
            }
        })
    }

}