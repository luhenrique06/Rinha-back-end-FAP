import { 
  Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable 
} from "typeorm";
import { Especialidade } from "./especialidade.entity";
import { Cidade } from "./cidade.entity";

@Entity("medico")
export class Medico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @Column({ length: 10, unique: true })
  crm: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  data_cadastro: Date;

  // Tabela médico_especialidade
  @ManyToMany(() => Especialidade, (especialidade) => especialidade.medicos)
  @JoinTable({
    name: "medico_especialidade",
    joinColumn: { name: "medico_id" },
    inverseJoinColumn: { name: "especialidade_id" },
  })
  especialidades: Especialidade[];

  // Tabela médico_cidade
  @ManyToMany(() => Cidade, (cidade) => cidade.medicos)
  @JoinTable({
    name: "medico_cidade",
    joinColumn: { name: "medico_id" },
    inverseJoinColumn: { name: "cidade_id" },
  })
  cidades: Cidade[];
}
