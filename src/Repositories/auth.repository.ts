import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async findByUsername(username: string): Promise<User | null> {
    return this.repo.findOne({ where: { username } });
  }

  async createUser(username: string, password: string): Promise<User> {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = this.repo.create({
      username,
      password: passwordHash,
    });

    return this.repo.save(newUser);
  }

  async validateCredentials(
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.findByUsername(username);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
  }
}
