import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';

class RegisterDto {
  @ApiProperty({ example: 'test1', description: 'id' })
  username: string;

  @ApiProperty({
    example: '1234',
    description: 'password',
  })
  password: string;

  @ApiProperty({ example: 'John Doe', description: 'name' })
  name: string;
}

class LoginDto {
  @ApiProperty({ example: 'test1', description: 'id' })
  username: string;

  @ApiProperty({
    example: '1234',
    description: 'password',
  })
  password: string;
}

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Successful login' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.username,
      registerDto.password,
      registerDto.name,
    );
  }

  @Post('login')
  @ApiOperation({ summary: 'User registration' })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (user) {
      return this.authService.login(user);
    }
    return { message: 'Invalid credentials' };
  }
}
