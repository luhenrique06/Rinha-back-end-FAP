import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Medico } from './entities/medico.entity';
import { Especialidade } from './entities/especialidade.entity';
import { Cidade } from './entities/cidade.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '150100',
    database: 'meu_banco',
    autoLoadEntities: true,
    synchronize: true,
    migrations: ["dist/migrations/*.js"],
    migrationsRun: true,
  }),
  TypeOrmModule.forFeature([
      User,
      Medico,
      Especialidade,
      Cidade,
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
