import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
// import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET /users or /users?role=value
  getAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.getAll(role);
  }

  @Get(':id') // GET /users/:id ==> /users/3 - dynamic
  getOne(@Param('id') id: string) {
    return this.usersService.getOne(+id);
  }

  @Post() // POST /users
  createUser(
    @Body()
    user: {
      name: string;
      age: number;
      hobby: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.usersService.createUser(user);
  }

  @Patch(':id') // PATCH /users/:id => update a part of info
  updateUser(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      age?: number;
      hobby?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.usersService.updateUser(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(+id);
  }
}
