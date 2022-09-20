import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getAllUser(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
  async getUser(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }
  async createUser(data: User): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }
  //   async updateTodo(id: number): Promise<User> {
  //     return this.prisma.user.update({
  //       where: { id: Number(id) },
  //       data: { completed: true },
  //     });
  //   }
  //   async deleteTodo(id: number): Promise<User> {
  //     return this.prisma.user.delete({
  //       where: { id: Number(id) },
  //     });
  //   }
}
