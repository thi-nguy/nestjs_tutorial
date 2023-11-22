import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      const roleUser = await this.prisma.user.findMany({
        where: {
          role: role,
        },
      });
      if (roleUser.length === 0) {
        throw new NotFoundException('User Role Not Found');
      }
      return roleUser;
    } else {
      return await this.prisma.user.findMany();
    }
  }

  async getOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    await this.prisma.user.create({ data: createUserDto });
    return createUserDto;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    await this.prisma.user.update({ where: { id: id }, data: updateUserDto });
    return this.getOne(id);
  }

  async deleteUser(id: number) {
    const removeUser = this.getOne(id);
    await this.prisma.user.delete({ where: { id: id } });
    return removeUser;
  }
}
