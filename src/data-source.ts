import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entities/user.entity";
import { Medico } from "./entities/medico.entity";
import { Cidade } from "./entities/cidade.entity";
import { Especialidade } from "./entities/especialidade.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "150100",
  database: "meu_banco",
  entities: [User, Medico, Cidade, Especialidade],
  migrations: ["dist/migrations/*.js"],
  synchronize: false,
});
