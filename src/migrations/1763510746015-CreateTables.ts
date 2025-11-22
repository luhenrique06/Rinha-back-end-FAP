import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1730000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        id SERIAL PRIMARY KEY,
        username VARCHAR(15) NOT NULL UNIQUE,
        password VARCHAR(15) NOT NULL,
        token VARCHAR(50)
      );
    `);

    await queryRunner.query(`
      CREATE TABLE especialidade (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(30) NOT NULL UNIQUE
      ); 
    `);

    await queryRunner.query(`
      CREATE TABLE cidade (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(30) NOT NULL,
        uf CHAR(2) NOT NULL,
        CONSTRAINT cidade_unique UNIQUE (nome, uf)
      );
    `);

    await queryRunner.query(`
      CREATE TABLE medico (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        crm VARCHAR(10) NOT NULL UNIQUE,
        data_cadastro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await queryRunner.query(`
      CREATE TABLE medico_especialidade (
        medico_id INTEGER NOT NULL REFERENCES medico(id) ON DELETE CASCADE,
        especialidade_id INTEGER NOT NULL REFERENCES especialidade(id) ON DELETE CASCADE,
        PRIMARY KEY (medico_id, especialidade_id)
      );
    `);

    await queryRunner.query(`
      CREATE TABLE medico_cidade (
        medico_id INTEGER NOT NULL REFERENCES medico(id) ON DELETE CASCADE,
        cidade_id INTEGER NOT NULL REFERENCES cidade(id) ON DELETE CASCADE,
        PRIMARY KEY (medico_id, cidade_id)
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE medico_cidade;`);
    await queryRunner.query(`DROP TABLE medico_especialidade;`);
    await queryRunner.query(`DROP TABLE medico;`);
    await queryRunner.query(`DROP TABLE cidade;`);
    await queryRunner.query(`DROP TABLE especialidade;`);
    await queryRunner.query(`DROP TABLE "user";`);
  }
}
