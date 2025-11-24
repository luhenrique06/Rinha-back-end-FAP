import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedCidades1730000000002 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO cidade (nome, uf) VALUES
      ('São Paulo', 'SP'),
      ('Apucarana', 'PR'),
      ('Rio de Janeiro', 'RJ');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM cidade 
      WHERE nome IN ('São Paulo', 'Apucarana', 'Rio de Janeiro');
    `);
  }
}
