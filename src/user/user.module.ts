import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidatorPipe } from 'src/validator/validator.pipe';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature( [User] )],
  controllers: [UserController],
  providers: [UserService,ValidatorPipe]
})
export class UserModule {}
