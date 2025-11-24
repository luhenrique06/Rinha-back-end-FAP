import { Controller, Post, Delete, Get, Param } from '@nestjs/common';
import { MedicoEspecialidadeService } from '../Services/medico-especialidade.service';

@Controller('medicos/:id/especialidades')
export class MedicoEspecialidadeController {
  constructor(
    private service: MedicoEspecialidadeService
  ) {}

  @Post(':especId')
  add(
    @Param('id') medicoId: string,
    @Param('especId') especId: string,
  ) {
    return this.service.add(Number(medicoId), Number(especId));
  }

  @Delete(':especId')
  remove(
    @Param('id') medicoId: string,
    @Param('especId') especId: string,
  ) {
    return this.service.remove(Number(medicoId), Number(especId));
  }

  @Get()
  list(@Param('id') medicoId: string) {
    return this.service.list(Number(medicoId));
  }
}
