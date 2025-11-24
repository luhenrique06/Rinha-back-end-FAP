import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { MedicoService } from '../Services/medico.service';

@Controller('medicos')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

 @Get()
  getAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string
  ) {
    return this.medicoService.getAll({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 10,
    });
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.medicoService.getOne(Number(id));
  }

  @Post()
  create(@Body() body: { nome: string; crm: string }) {
    return this.medicoService.create(body);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: Partial<{ nome: string; crm: string }>
  ) {
    return this.medicoService.update(Number(id), body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.medicoService.delete(Number(id));
  }

  @Get('search')
  search(
    @Query('specialty') specialty?: string,
    @Query('city') city?: string,
    @Query('name') name?: string
  ) {
    return this.medicoService.advancedSearch({ specialty, city, name });
  }
}
