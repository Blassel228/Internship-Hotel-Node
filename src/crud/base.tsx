import { PrismaClient } from '@prisma/client';


export abstract class BaseRepository<T extends keyof PrismaClient> {
  constructor(protected prisma: PrismaClient, private modelName: T) {}

  protected getDelegate() {
    return this.prisma[this.modelName];
  }

  async create(data: any) {
    return await this.getDelegate().create({ data });
  }

  async findMany() {
    return await this.getDelegate().findMany();
  }

  async findById(id: string) {
    return await this.getDelegate().findUnique({ where: { id } });
  }

  async update(id: string, data: any) {
    return await this.getDelegate().update({ where: { id }, data });
  }

  async delete(id: string) {
    return await this.getDelegate().delete({ where: { id } });
  }
}