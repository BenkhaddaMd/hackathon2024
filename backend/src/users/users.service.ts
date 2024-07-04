import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = new User();
      const hashPassword = await bcrypt.hash(createUserDto.password, 10);
      user.username = createUserDto.username;
      user.email = createUserDto.email;
      user.password = hashPassword;
      user.role = createUserDto.role;
      return this.userRepository.save(user);
    } catch (err) {
      throw new Error(`Error creating ${err} user ${err.message}`);
    }
  }

  async findOneById(userId: string): Promise<User> {
    return await this.userRepository.findOne({
      where: { id: userId },
    });
  }

  async findOne(email: string, password: string): Promise<User | undefined> {
    try {
      const user = await this.userRepository.findOne({
        where: { email },
      });

      if (!user) {
        throw new UnauthorizedException({
          message: 'User not found',
          code: 'USER_NOT_FOUND',
        });
      }
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new UnauthorizedException({
          message: 'Invalid credentials',
          code: 'INVALID_CREDENTIALS',
        });
      }

      console.log('User validated:', user);
      return user;
    } catch (err) {
      console.error('Error finding user:', err);
      throw new UnauthorizedException({
        message: `Error finding user: ${err.message}`,
        code: 'FIND_USER_ERROR',
      });
    }
  }
}
