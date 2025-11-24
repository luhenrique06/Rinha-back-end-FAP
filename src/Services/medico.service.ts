import { Injectable } from '@nestjs/common';
import { MedicoRepository } from '../Repositories/medico.repository';

@Injectable()
export class MedicoService {
  constructor(private readonly repo: MedicoRepository) {}

  getAll(pagination: { page: number; limit: number }) {
    return this.repo.findAll(pagination);
  }

  getOne(id: number) {
    return this.repo.findById(id);
  }

  create(data: { nome: string; crm: string }) {
    return this.repo.create(data);  // <-- agora envia o objeto inteiro
  }

  update(id: number, body: any) {
    return this.repo.updateMedico(id, body);
  }

  delete(id: number) {
    return this.repo.deleteMedico(id);
  }

  advancedSearch(filters: { specialty?: string; city?: string; name?: string }) {
    return this.repo.searchDoctors(filters);
  }
}
