import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from 'src/Repositories/auth.repository';

interface RegisterDto {
  username: string;
  password: string;
}

interface LoginDto {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const { username, password } = registerDto;

    const existingUser = await this.authRepository.findByUsername(username);
    if (existingUser) {
      throw new BadRequestException('Usuário já existe');
    }

    await this.authRepository.createUser(username, password);

    return { message: 'Usuário registrado com sucesso' };
  }

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    const user = await this.authRepository.validateCredentials(username, password);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id, username: user.username };
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '1h',
      secret: process.env.JWT_SECRET || 'temp',
    });

    return {
      access_token: token,
      user: { id: user.id, username: user.username },
    };
  }
}
