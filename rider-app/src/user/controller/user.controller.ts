import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Res,
  Req,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { UpdateUserDto } from 'src/dto/updateuserdto';

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
  async getUser(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<User | null> {
    try {
      const user = await this.userService.getUser(id);
      if (!user) {
        res.status(400).json({ message: `No user exist with this id` });
        return;
      }
      res.json({ message: user });
      return;
    } catch (error) {
      res.status(500).json({ sucess: false, error: error.message });
    }
  }
  @Put(':id')
  async Update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
    @Res() res: Response,
  ): Promise<User> {
    try {
      const updateUser = await this.userService.updateUser(id, updateUserDto);
      res.json({ success: true, data: updateUser });
      return;
    } catch (error) {
      console.log(error);
      res.status(500).json({ sucess: false, error: error.message });
    }
  }
  @Delete(':id')
  async Delete(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
