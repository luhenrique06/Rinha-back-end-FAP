import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from '../entities/medico.entity';
import { Especialidade } from '../entities/especialidade.entity';

@Injectable()
export class MedicoEspecialidadeRepository {
  constructor(
    @InjectRepository(Medico)
    private medicoRepo: Repository<Medico>,

    @InjectRepository(Especialidade)
    private especRepo: Repository<Especialidade>,
  ) {}

  async addEspecialidade(medicoId: number, especId: number) {
    const medico = await this.medicoRepo.findOne({
      where: { id: medicoId },
      relations: ['especialidades'],
    });

    const espec = await this.especRepo.findOne({ where: { id: especId } });

    medico.especialidades.push(espec);

    return this.medicoRepo.save(medico);
  }

  async removeEspecialidade(medicoId: number, especId: number) {
    const medico = await this.medicoRepo.findOne({
      where: { id: medicoId },
      relations: ['especialidades'],
    });

    medico.especialidades = medico.especialidades.filter(
      (e) => e.id !== especId,
    );

    return this.medicoRepo.save(medico);
  }

  listEspecialidades(medicoId: number) {
    return this.medicoRepo.findOne({
      where: { id: medicoId },
      relations: ['especialidades'],
    });
  }
}
