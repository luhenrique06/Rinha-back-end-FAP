import { Injectable } from '@nestjs/common';
import { EspecialidadeRepository } from '../Repositories/especialidade.repository';

@Injectable()
export class EspecialidadeService {
  constructor(private repo: EspecialidadeRepository) {}

  getAll() {
    return this.repo.findAll();
  }

  getOne(id: number) {
    return this.repo.findById(id);
  }

  create(data: { nome: string }) {
    return this.repo.create(data.nome);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
