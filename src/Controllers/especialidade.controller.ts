import { 
  Controller, 
  Get, 
  Post, 
  Delete, 
  Param, 
  Body, 
  UseGuards 
} from '@nestjs/common';
import { EspecialidadeService } from '../Services/especialidade.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('especialidades')
export class EspecialidadeController {
  constructor(private service: EspecialidadeService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.service.getOne(Number(id));
  }

  @Post()
  create(@Body() body: { nome: string }) {
    return this.service.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
