export default interface IRepository<T> {
    getAll(): Promise<T[]>;
    getAllByFilter(filter: {}): Promise<T[]>;
    getById(id: number): Promise<T>;
    create(item: T): Promise<T>;
    update(id: number, item: T): Promise<T>;
    delete(id: number): Promise<T>;
}