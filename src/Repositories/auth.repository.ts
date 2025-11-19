import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

interface User {
  id: number;
  username: string;
  passwordHash: string;
}

@Injectable()
export class AuthRepository {
  private users: User[] = [];
  private idCounter = 1;

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async createUser(username: string, password: string): Promise<User> {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: this.idCounter++,
      username,
      passwordHash,
    };
    this.users.push(newUser);
    return newUser;
  }

  async validateCredentials(
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.findByUsername(username);
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.passwordHash);
    return isValid ? user : null;
  }
}
