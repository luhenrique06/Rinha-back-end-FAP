import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Medico } from "./medico.entity";

@Entity("especialidade")
export class Especialidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, unique: true })
  nome: string;

  @ManyToMany(() => Medico, (medico) => medico.especialidades)
  medicos: Medico[];
}
