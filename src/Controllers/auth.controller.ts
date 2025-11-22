import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common'
import { AuthService } from 'src/Services/auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    return this.authService.login(loginDto)
  }

  @Post('register')
  async register(@Body() registerDto: { username: string, password: string }) {
    return this.authService.register(registerDto)
  }

 }
