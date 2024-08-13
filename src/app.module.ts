import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RestModule } from './rest/rest.module';
import { RestLogModule } from './restlog/restlog.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // MySQL root 비밀번호 입력
      database: 'rest_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    RestModule,
    RestLogModule,
  ],
})
export class AppModule {}
