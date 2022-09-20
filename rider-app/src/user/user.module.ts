import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './controller/user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
