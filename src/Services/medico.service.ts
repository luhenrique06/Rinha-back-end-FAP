import { Injectable } from '@nestjs/common';
import { MedicoRepository } from './medico.repository';

@Injectable()
export class MedicoService {
  constructor(private medicoRepo: MedicoRepository) {}

  getAll() {
    return this.medicoRepo.findAll();
  }

  getOne(id: number) {
    return this.medicoRepo.findById(id);
  }

  create(data: { nome: string; crm: string }) {
    return this.medicoRepo.create(data.nome, data.crm);
  }
}
