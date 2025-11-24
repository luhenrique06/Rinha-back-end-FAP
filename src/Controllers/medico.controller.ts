import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MedicoService } from '../Services/medico.service';

@Controller('medicos')
export class MedicoController {
  constructor(private medicoService: MedicoService) {}

  @Get()
  getAll() {
    return this.medicoService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.medicoService.getOne(Number(id));
  }

  @Post()
  create(@Body() body: { nome: string; crm: string }) {
    return this.medicoService.create(body);
  }
}
