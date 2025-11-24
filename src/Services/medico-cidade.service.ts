import { Injectable } from '@nestjs/common';
import { MedicoCidadeRepository } from '../Repositories/medico-cidade.repository';

@Injectable()
export class MedicoCidadeService {
  constructor(private repo: MedicoCidadeRepository) {}

  add(medicoId: number, cidadeId: number) {
    return this.repo.addCidade(medicoId, cidadeId);
  }

  remove(medicoId: number, cidadeId: number) {
    return this.repo.removeCidade(medicoId, cidadeId);
  }

  list(medicoId: number) {
    return this.repo.listCidades(medicoId);
  }
}
