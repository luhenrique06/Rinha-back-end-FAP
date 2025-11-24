import { 
  Controller, 
  Get, 
  Post, 
  Delete, 
  Param, 
  Body 
} from '@nestjs/common';
import { CidadeService } from '../Services/cidade.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Cidades')
@Controller('cidades')
export class CidadeController {
  constructor(private service: CidadeService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as cidades' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso' })
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma cidade pelo ID' })
  @ApiResponse({ status: 200, description: 'Cidade encontrada' })
  @ApiResponse({ status: 404, description: 'Cidade não encontrada' })
  getOne(@Param('id') id: string) {
    return this.service.getOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma nova cidade' })
  @ApiResponse({ status: 201, description: 'Cidade criada com sucesso' })
  create(@Body() body: { nome: string; uf: string }) {
    return this.service.create(body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma cidade' })
  @ApiResponse({ status: 200, description: 'Cidade deletada com sucesso' })
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
