import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '@prisma/client';

@Controller('api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getAllTodo(): Promise<User[]> {
    return this.userService.getAllUser();
  }
  @Post()
  async createUser(@Body() postData: User): Promise<User> {
    return this.userService.createUser(postData);
  }
  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User | null> {
    return this.userService.getUser(id);
  }
  //   @Put(':id')
  //   async Update(@Param('id') id: number): Promise<User> {
  //     return this.todoService.updateTodo(id);
  //   }
  //   @Delete(':id')
  //   async Delete(@Param('id') id: number): Promise<User> {
  //     return this.todoService.deleteTodo(id);
  //   }
}
