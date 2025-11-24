import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class EspecialidadeRepository {
  constructor(private dataSource: DataSource) {}

  async findAll() {
    // return this.dataSource.query(`SELECT * FROM especialidade ORDER BY nome`);
    return this.dataSource.query(`SELECT * FROM especialidade ORDER BY nome`);
  }

  async findById(id: number) {
    const result = await this.dataSource.query(
      `SELECT * FROM especialidade WHERE id = $1`,
      [id],
    );
    return result[0] ?? null;
  }

  async create(nome: string) {
    return this.dataSource.query(
      `INSERT INTO especialidade (nome) VALUES ($1) RETURNING *`,
      [nome],
    );
  }

  async delete(id: number) {
    return this.dataSource.query(
      `DELETE FROM especialidade WHERE id = $1 RETURNING *`,
      [id],
    );
  }
}
