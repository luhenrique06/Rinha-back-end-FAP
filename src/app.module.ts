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
import { MedicoEspecialidadeController } from './Controllers/medico-especialidade.controller';
import { MedicoCidadeController } from './Controllers/medico-cidade.controller';

// SERVICES
import { MedicoService } from './Services/medico.service';
import { EspecialidadeService } from './Services/especialidade.service';
import { CidadeService } from './Services/cidade.service';
import { MedicoEspecialidadeService } from './Services/medico-especialidade.service';
import { MedicoCidadeService } from './Services/medico-cidade.service';

// REPOSITORIES
import { MedicoRepository } from './Repositories/medico.repository';
import { EspecialidadeRepository } from './Repositories/especialidade.repository';
import { CidadeRepository } from './Repositories/cidade.repository';
import { MedicoEspecialidadeRepository } from './Repositories/medico-especialidade.repository';
import { MedicoCidadeRepository } from './Repositories/medico-cidade.repository';

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
      synchronize: true,
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
    }),

    // Registro das entidades no TypeORM
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
    MedicoEspecialidadeController,
    MedicoCidadeController,
  ],

  providers: [
    AppService,

    MedicoService,
    MedicoRepository,

    EspecialidadeService,
    EspecialidadeRepository,

    CidadeService,
    CidadeRepository,

    MedicoEspecialidadeService,
    MedicoEspecialidadeRepository,

    MedicoCidadeService,
    MedicoCidadeRepository,
  ],
})
export class AppModule {}
