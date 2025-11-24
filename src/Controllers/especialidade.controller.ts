import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { EspecialidadeService } from '../Services/especialidade.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

// @ApiBearerAuth()
@ApiTags('Especialidades')
// @UseGuards(AuthGuard('jwt'))
@Controller('especialidades')
export class EspecialidadeController {
  constructor(private service: EspecialidadeService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as especialidades' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma especialidade pelo ID' })
  @ApiResponse({ status: 200, description: 'Especialidade encontrada' })
  @ApiResponse({ status: 404, description: 'Especialidade não encontrada' })
  getOne(@Param('id') id: string) {
    return this.service.getOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova especialidade' })
  @ApiResponse({ status: 201, description: 'Especialidade criada com sucesso' })
  create(@Body() body: { nome: string }) {
    return this.service.create(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma especialidade' })
  @ApiResponse({ status: 200, description: 'Especialidade deletada com sucesso' })
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
