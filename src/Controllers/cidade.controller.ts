import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CidadeService } from '../Services/cidade.service';

@Controller('cidades')
export class CidadeController {
  constructor(private service: CidadeService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.getOne(Number(id));
  }

  @Post()
  create(@Body() body: { nome: string; uf: string }) {
    return this.service.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
