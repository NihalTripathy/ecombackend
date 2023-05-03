import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
    
      async create(createUserDto: CreateUserDto): Promise<User> {
        const user = new User();
        user.firstName = createUserDto.firstName;
        user.lastName = createUserDto.lastName;
        user.age = createUserDto.age;
        user.email_id = createUserDto.email_id;
        user.password = createUserDto.password;
        return this.userRepository.save(user);
      }
    
      async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }
    
      async findOne(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
      }
    
      async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        const user = await this.userRepository.findOne({ where: { id } });
        user.firstName = updateUserDto.firstName || user.firstName;
        user.lastName = updateUserDto.lastName || user.lastName;
        user.email_id = updateUserDto.email_id || user.email_id;
        user.password = updateUserDto.password || user.password;
        return this.userRepository.save(user);
      }
    
      async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }
}
