import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medico } from '../entities/medico.entity';
import { Cidade } from '../entities/cidade.entity';

@Injectable()
export class MedicoCidadeRepository {
  constructor(
    @InjectRepository(Medico)
    private medicoRepo: Repository<Medico>,

    @InjectRepository(Cidade)
    private cidadeRepo: Repository<Cidade>,
  ) {}

  async addCidade(medicoId: number, cidadeId: number) {
    const medico = await this.medicoRepo.findOne({
      where: { id: medicoId },
      relations: ['cidades'],
    });

    const cidade = await this.cidadeRepo.findOne({ where: { id: cidadeId } });

    medico.cidades.push(cidade);

    return this.medicoRepo.save(medico);
  }

  async removeCidade(medicoId: number, cidadeId: number) {
    const medico = await this.medicoRepo.findOne({
      where: { id: medicoId },
      relations: ['cidades'],
    });

    medico.cidades = medico.cidades.filter((c) => c.id !== cidadeId);

    return this.medicoRepo.save(medico);
  }

  listCidades(medicoId: number) {
    return this.medicoRepo.findOne({
      where: { id: medicoId },
      relations: ['cidades'],
    });
  }
}
