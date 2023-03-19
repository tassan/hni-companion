import IRepository from "@/core/Interfaces/Repository";
import {Character, PrismaClient} from "@prisma/client";

const _prisma = new PrismaClient();

export class CharacterRepository implements IRepository<Character>
{
    create(item: Character): Promise<Character> {
        return _prisma.character.create({
            data: {
                name: item.name,
                age: item.age,
                division: item.division,
                alignment: item.alignment,
                rank: item.rank,
                authorId: item.authorId
            }
        });
    }

    delete(id: number): Promise<Character> {
        return _prisma.character.delete({
            where: {
                id: id
            }
        });
    }

    getAll(): Promise<Character[]> {
        return _prisma.character.findMany();
    }

    getAllByFilter(filter: {}): Promise<Character[]> {
        return _prisma.character.findMany({
            where: {
                ...filter
            }
        });
    }

    getById(id: number): Promise<Character> {
        return _prisma.character.findUnique({
            where: {
                id: id
            }
        }).then((character) => {
            return character as Character;
        });
    }

    update(id: number, item: Character): Promise<Character> {
        return _prisma.character.update({
            where: {
                id: id
            },
            data: {
                name: item.name,
                age: item.age,
                division: item.division,
                alignment: item.alignment,
                rank: item.rank,
                authorId: item.authorId
            }
        });
    }

}