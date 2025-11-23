import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class MedicoRepository {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    return this.dataSource.query(`SELECT * FROM medico`);
  }

  async findById(id: number) {
    const result = await this.dataSource.query(
      `SELECT * FROM medico WHERE id = $1`,
      [id],
    );
    return result[0];
  }

  async create(nome: string, crm: string) {
    return this.dataSource.query(
      `INSERT INTO medico (nome, crm) VALUES ($1, $2) RETURNING *`,
      [nome, crm],
    );
  }
}
