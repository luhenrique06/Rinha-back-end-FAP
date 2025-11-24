import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// ENTIDADES
import { User } from './entities/user.entity';
import { Medico } from './entities/medico.entity';
import { Especialidade } from './entities/especialidade.entity';
import { Cidade } from './entities/cidade.entity';

// CONTROLLERS
import { MedicoController } from './Controllers/medico.controller';
import { EspecialidadeController } from './Controllers/especialidade.controller';
import { CidadeController } from './Controllers/cidade.controller';

// SERVICES
import { MedicoService } from './Services/medico.service';
import { EspecialidadeService } from './Services/especialidade.service';
import { CidadeService } from './Services/cidade.service';

// REPOSITORIES
import { MedicoRepository } from './Repositories/medico.repository';
import { EspecialidadeRepository } from './Repositories/especialidade.repository';
import { CidadeRepository } from './Repositories/cidade.repository';
import { AuthController } from './Controllers/auth.controller';
import { AuthService } from './Services/auth.service';
import { AuthRepository } from './Repositories/auth.repository';
import { JwtService } from '@nestjs/jwt';
import { HealthController } from './Controllers/health.controller';
import { HealthService } from './Services/health.service';
import { HealthRepository } from './Repositories/health.repository';

@Module({
  imports: [
    // Conexão com o Postgres
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '150100',
      database: 'meu_banco',
      autoLoadEntities: true,
      synchronize: false,
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
    }),

    TypeOrmModule.forFeature([
      User,
      Medico,
      Especialidade,
      Cidade,
    ]),
  ],

  controllers: [
    AppController,
    MedicoController,
    EspecialidadeController,
    CidadeController,
    AuthController,
    HealthController
  ],

  providers: [
    AppService,
    MedicoService,
    MedicoRepository,
    EspecialidadeService,
    EspecialidadeRepository,
    CidadeService,
    CidadeRepository,
    AuthService,
    AuthRepository,
    JwtService,
    HealthService,
    HealthRepository
  ],
})
export class AppModule {}
