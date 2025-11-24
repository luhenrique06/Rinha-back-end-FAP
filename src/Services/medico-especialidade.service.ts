import { Injectable } from '@nestjs/common';
import { MedicoEspecialidadeRepository } from '../Repositories/medico-especialidade.repository';

@Injectable()
export class MedicoEspecialidadeService {
  constructor(
    private repo: MedicoEspecialidadeRepository
  ) {}

  add(medicoId: number, especId: number) {
    return this.repo.addEspecialidade(medicoId, especId);
  }

  remove(medicoId: number, especId: number) {
    return this.repo.removeEspecialidade(medicoId, especId);
  }

  list(medicoId: number) {
    return this.repo.listEspecialidades(medicoId);
  }
}
