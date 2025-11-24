import { Controller, Post, Delete, Get, Param } from '@nestjs/common';
import { MedicoCidadeService } from '../Services/medico-cidade.service';

@Controller('medicos/:id/cidades')
export class MedicoCidadeController {
  constructor(private service: MedicoCidadeService) {}

  @Post(':cidadeId')
  add(
    @Param('id') medicoId: string,
    @Param('cidadeId') cidadeId: string,
  ) {
    return this.service.add(Number(medicoId), Number(cidadeId));
  }

  @Delete(':cidadeId')
  remove(
    @Param('id') medicoId: string,
    @Param('cidadeId') cidadeId: string,
  ) {
    return this.service.remove(Number(medicoId), Number(cidadeId));
  }

  @Get()
  list(@Param('id') medicoId: string) {
    return this.service.list(Number(medicoId));
  }
}
