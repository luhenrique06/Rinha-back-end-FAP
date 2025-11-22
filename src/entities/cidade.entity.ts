import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Unique } from "typeorm";
import { Medico } from "./medico.entity";

@Entity("cidade")
@Unique(["nome", "uf"])
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  nome: string;

  @Column({ length: 2 })
  uf: string;

  @ManyToMany(() => Medico, (medico) => medico.cidades)
  medicos: Medico[];
}
