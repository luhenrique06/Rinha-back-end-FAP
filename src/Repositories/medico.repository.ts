import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from '../entities/medico.entity';

@Injectable()
export class MedicoRepository {
  constructor(
    @InjectRepository(Medico)
    private readonly repo: Repository<Medico>,
  ) {}

  async findAll(pagination: { page: number; limit: number }) {
    const { page, limit } = pagination;
    const [data, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async findById(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async create(data: { nome: string; crm: string }) {
    const medico = this.repo.create(data);
    return this.repo.save(medico);
  }

  async updateMedico(id: number, data: any) {
    await this.repo.update(id, data);
    return this.repo.findOne({ where: { id } });
  }

  async deleteMedico(id: number) {
    const medico = await this.repo.findOne({ where: { id } });
    if (!medico) return null;

    await this.repo.remove(medico);
    return medico;
  }

  async searchDoctors(filters: { specialty?: string; city?: string; name?: string }) {
  const query = this.repo.createQueryBuilder('medico')
    .leftJoinAndSelect('medico.especialidades', 'especialidade') // N:N
    .leftJoinAndSelect('medico.cidades', 'cidade');              // N:N

  if (filters.specialty) {
    query.andWhere('especialidade.nome = :specialty', { specialty: filters.specialty });
  }

  if (filters.city) {
    query.andWhere('cidade.nome = :city', { city: filters.city });
  }

  if (filters.name) {
    query.andWhere('medico.nome ILIKE :name', { name: `%${filters.name}%` });
  }

  return query.getMany();
}
}
