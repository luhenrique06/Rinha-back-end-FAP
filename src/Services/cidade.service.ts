import { Injectable } from '@nestjs/common';
import { CidadeRepository } from '../Repositories/cidade.repository';

@Injectable()
export class CidadeService {
  constructor(private repo: CidadeRepository) {}

  getAll() {
    return this.repo.findAll();
  }

  getOne(id: number) {
    return this.repo.findById(id);
  }

  create(data: { nome: string; uf: string }) {
    return this.repo.create(data.nome, data.uf);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
