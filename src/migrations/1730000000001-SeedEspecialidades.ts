import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedEspecialidades1730000000001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO especialidade (nome) VALUES
      ('Cardiologia'),
      ('Pediatria'),
      ('Dermatologia'),
      ('Clínica Geral');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM especialidade 
      WHERE nome IN (
        'Cardiologia', 'Pediatria', 'Dermatologia',
        'Clínica Geral');
    `);
  }
}
